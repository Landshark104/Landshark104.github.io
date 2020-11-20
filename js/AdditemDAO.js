// Save item details in a indexeddb database
function saveItemData() {
    var itemName = $('#Tname').val();
    var itemDesc = $('#Tdes').val();
    var date = $('#date').val();
    var pri = $('#pri').val();
    
    var data = {
    'itemName' : itemName,
    'itemDesc' : itemDesc,
    'date' : date,
    'pri' : pri,
    };

    var fileInput = $('#fileImage');
    var selectedFile = fileInput.get(0).files[0];
    
    if (typeof selectedFile != 'undefined')
      data.itemImage = selectedFile;

    insertOne (data, function(lastID) {
        event.preventDefault();
        return false;
    });
}
