$(document).on('change', '#fileImage', function(event) {
	previewFile();
});


function previewFile(){//To show the selected file in an image container
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


$('#Ntasks').submit(function(event){//Jquery to add the form data to the object for the database
    event.preventDefault();
    setDatabaseName('dbTasks',['UsersObjectStore', 'ItemsObjectStore']);//get the data base name 
    setCurrObjectStoreName('ItemsObjectStore');
    startDB(function(){
        saveItemData();
        alert("Item has been saved. Click Tasks to view the new task.")
    })
});