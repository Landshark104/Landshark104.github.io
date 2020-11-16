setDatabaseName('dbTasks',['UsersObjectStore', 'ItemsObjectStore']);
setCurrObjectStoreName('ItemsObjectStore');
startDB(function(){
    showAllItems();
});