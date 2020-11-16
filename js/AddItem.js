$('#Ntasks').submit(function(event){
    event.preventDefault();
    setDatabaseName('dbTasks',['UsersObjectStore', 'ItemsObjectStore']);
    setCurrObjectStoreName('ItemsObjectStore');
    startDB(function(){
        saveItemData();
        alert("Item has been saved. Click Tasks to view the new task.")
    })
});