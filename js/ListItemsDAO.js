function showAllItems(){
    selectAll (function(results){
        var len = results.length, i;
        for(i = 0; i<len; i++){
            try {
                var obj_url = window.URL.createObjectURL(results[i].itemImage);
                var item_id = results[i].id;
                var item_ids = results[i].id;//used in the update function
                var img_id = "image-" + item_id;
                $('#' + img_id).attr('src', obj_url);
                $('#TaskTable').append(
                    '<tr id="'+ results[i].id +'">\
                    <td>' + results[i].id + '</tda>\
                    <td class="Name">' + results[i].itemName + '</td>\
                    <td class="Desc">' + results[i].itemDesc + '</td>\
                    <td class="date">' + results[i].date + '</td>\
                    <td class="pri">' + results[i].pri + '</td>\
                    <td class="stat">' + results[i].stat + '</td>\
                    <td class="Image">' + '<img src="' + obj_url +'" style="width="100" height="100"></img>' + '</td>\
                    <td><a href=" " class="actionDelete">Delete</a></td>\
                    <td><a href=" " class="actionUpdate">Update</a></td>\
                    </tr>')
            }
            catch {//put a catch in to prevent a table error if the user adds no image else it would crash the table 
                var item_id = results[i].id;
                var item_ids = results[i].id;//used for update function if there is no img
                $('#TaskTable').append(
                    '<tr id="'+ results[i].id +'">\
                    <td>' + results[i].id + '</tda>\
                    <td class="Name">' + results[i].itemName + '</td>\
                    <td class="Desc">' + results[i].itemDesc + '</td>\
                    <td class="date">' + results[i].date + '</td>\
                    <td class="pri">' + results[i].pri + '</td>\
                    <td class="stat">' + results[i].stat + '</td>\
                    <td class="Image">' + " " + '</td>\
                    <td><a href=" " class="actionDelete">Delete</a></td>\
                    <td><a href=" " class="actionUpdate">Update</a></td>\
                    </tr>')
            }
        }

    //Event handler for each "delete" link created earlier
        $('.actionDelete').click(function() {
            var itemID = parseInt($(this).parent().attr('id'));
            
            deleteOne(itemID, function() {
                location.reload(true);//reloads the page after the delete
            })
                    
            return false;
        });
            
        //Event handler for each "Update" link created earlier
    $('.actionUpdate').click (function() {
        var itemid = parseInt($(this).parent().attr('id'));
        window.open("index.ETask.html?itemID="+item_ids,"_self");//had to use item_ids as the id throws and key error		
        return false;
    });    
    });
}
