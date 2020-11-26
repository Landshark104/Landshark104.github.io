setDatabaseName('dbTasks',['UsersObjectStore', 'ItemsObjectStore']);
setCurrObjectStoreName('ItemsObjectStore');//gets the items stored in the object
startDB(function(){
    showAllItems();
});