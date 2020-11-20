//Save item details in a indexeddb database

function updateItemData(data) {
	//User input of item name
	var itemName = $('#Tname').val();
	var itemDesc = $('#Tdes').val();
    var date = $('#date').val();
    var pri = $('#pri').val();
    
		
	//Create an item object combining name, desc and price attributes
	data.itemName = itemName;
	data.itemDesc = itemDesc;
	data.date = date;
	data.pri = pri;
	
	//Add the user selected image to data object
	var fileInput = $('#fileImage');
    var selectedFile = fileInput.get(0).files[0];
	
	if (typeof selectedFile != 'undefined')
	  data.itemImage = selectedFile;

	//Insert data into indexedDB database
	updateOne(data, function(lastID) {
		event.preventDefault();
		return false;
	});
}

