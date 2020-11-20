//Retrieve Item information saved in database 
//show in the form
var urlParams = new URLSearchParams(window.location.search);
var itemID = urlParams.get('itemID');
$('#itemID').html("Item ID: " + itemID);

setDatabaseName('dbTasks', ['UsersObjectStore', 'ItemsObjectStore']);
setCurrObjectStoreName('ItemsObjectStore');
//Select One function to retrieve data of a specific item
var data;
startDB(function () {
	selectOne(itemID, function(result) {
		$('#Tname').val(result.itemName);
		data = result;
	})
})


//Event handler for file input
//shows selected image in a image container
$(document).on('change', '#fileImage', function(event) {
	previewFile();
});

//To show the selected file in an image container
function previewFile(){
	var preview = document.querySelector('img'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
		preview.src = reader.result;
    }

    if (file) {
		reader.readAsDataURL(file); //reads the data as a URL
    } else {
		preview.src = "";
    }
}

//Event handler for form submit button
$('#Utasks').submit(function(event){
	
    // cancels the deafult form submission and handle the event from javascript
    event.preventDefault();

	//Create an idexedDB database (the name of the database is dbFlogger) 
	// with two object stores - UsersObjectStore to store user data 
	// and ItemsObjectStore to store item data
	setDatabaseName('dbTasks', ['UsersObjectStore', 'ItemsObjectStore']);
	// For this example, we will store data in ItemsObjectStore
	setCurrObjectStoreName('ItemsObjectStore');
	//startDB will create a connection with the database and
	//execute operations such as save item
	startDB(function () {
		updateItemData(data);
		alert("Item has been updated successfully!");
	});
});

