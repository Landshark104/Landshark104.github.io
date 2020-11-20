function showAllItems(){
    selectAll (function(results){
        var len = results.length, i;
        for(i = 0; i<len; i++){
            try {
                var obj_url = window.URL.createObjectURL(results[i].itemImage);
                var item_id = results[i].id;
                var img_id = "image-" + item_id;
                $('#' + img_id).attr('src', obj_url);
                $('#TaskTable').append(
                    '<tr id="'+ results[i].id +'">\
                    <td>' + results[i].id + '</tda>\
                    <td class="Name">' + results[i].itemName + '</td>\
                    <td class="Desc">' + results[i].itemDesc + '</td>\
                    <td class="date">' + results[i].date + '</td>\
                    <td class="pri">' + results[i].pri + '</td>\
                    <td class="Image">' + '<img src="' + obj_url +'" style="width="100" height="100"></img>' + '</td>\
                    <td><a href=" " class="actionDelete">Delete</a></td>\
                    <td><a href=" " class="actionUpdate">Update</a></td>\
                    </tr>')
            }
            catch {
                $('#TaskTable').append(
                    '<tr id="'+ results[i].id +'">\
                    <td>' + results[i].id + '</tda>\
                    <td class="Name">' + results[i].itemName + '</td>\
                    <td class="Desc">' + results[i].itemDesc + '</td>\
                    <td class="date">' + results[i].date + '</td>\
                    <td class="pri">' + results[i].pri + '</td>\
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
                //alert("Please re");
                location.reload(true);
            })
                    
            return false;
        });
            
        //Event handler for each "Update" link created earlier
        $('.actionUpdate').click (function() {
            var itemID = parseInt($(this).parent().attr('id'));
            window.open("../UpdateItemPage/UpdateItem.html?itemID="+itemID,"_self");		
            return false;
        });    
    });
}

