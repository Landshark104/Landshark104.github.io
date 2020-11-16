function showAllItems(){
    selectAll (function(results){
        var len = results.length, i;
        for(i = 0; i<len; i++){
            $('#TaskTable').append(
                '<tr id="'+ results[i].id +'">\
                <td>' + results[i].id + '</tda>\
                <td class="Name">' + results[i].itemName + '</td>\
                <td class="Desc">' + results[i].itemDesc + '</td>\
                <td class="date">' + results[i].date + '</td>\
                <td class="pri">' + results[i].pri + '</td>\
                <td><button class="Delete">Delete</button></td>\
                <td><button class="Update">Update</button></td>\
                </tr>'
            )
        }
    });
}