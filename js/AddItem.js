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


$('#Ntasks').submit(function(event){
    event.preventDefault();
    setDatabaseName('dbTasks',['UsersObjectStore', 'ItemsObjectStore']);
    setCurrObjectStoreName('ItemsObjectStore');
    startDB(function(){
        saveItemData();
        alert("Item has been saved. Click Tasks to view the new task.")
        location.reload(true);
    })
});