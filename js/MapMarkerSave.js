function googleMapsMarkerToSerializable(markerObject) {
    var outputObject = {};
    outputObject.position = markerObject.position;
    outputObject.title = markerObject.title;
    outputObject.draggable = markerObject.draggable ? 1 : 0;
    outputObject.mapElementId = markerObject.map.getAttribute('id');
    return outputObject;
  }
  
  function googleMapsMarkerFromSerializable(inputObject) {
    var parameters = {};
    parameters.position = inputObject.position;
    parameters.map = document.getElementById(inputObject.mapElementId);
    parameters.title = inputObject.title;
    parameters.draggable = inputObject.draggable ? true : false; 
    return new google.maps.Marker(parameters);
  }
  
  function storeMarker(db, marker, callback) {
    var tx = db.transaction('markers', 'readwrite');
    var store = tx.objectStore('markers');
    var serializableMarker = googleMapsMarkerToSerializable(marker);
    store.put(serializableMarker);
    tx.oncomplete = callback;
  }
  
  function loadMarker(db, markerId, callback) {
    var tx = db.transaction('markers');
    var store = tx.objectStore('markers');
    var request = store.get(markerId);
    request.onsuccess = function onRequestSuccess(event) {
      var serializableMarker = event.target.result;
      if(!serializableMarker) {
        callback(null);
      } else {
        var marker = googleMapsMarkerFromSerializable(serializableMarker);
        callback(marker);
      }
    };
  }
  
  
  // In the query section of your code:
  var request = indexedDB.open("dbTasks");
  request.onsuccess = function(event) {
    var db = event.target.result;
    var someMarkerId = 5;
    loadMarker(db, someMarkerId, function(marker) {
      console.debug('Loaded marker:', marker);
    });
  };