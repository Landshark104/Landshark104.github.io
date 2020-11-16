function getCustomer(btn) {
    db.linq.from(config.objectStoreName).get($(btn).val()).then(InitializeUpdate, handleError);
}
 
 
function InitializeUpdate(customer) {
    $("#txtId").val(customer.CustomerID);
    $("#txtName").val(customer.Name);
    $("#txtEmail").val(customer.Email);
    $("#txtPhone").val(customer.Phone);
    $("#txtEmail").attr('disabled', 'disabled').css({ 'color': 'gray' });
    $("#dialog-form").dialog("open");
}
 
 
function saveCustomer(customer) {
    var emails = [];
    //get all localDB emails
    db.linq.from(config.objectStoreName).select(["Email"]).then(function () {
        if ((customer.CustomerID && customer.CustomerID != 0) || $.inArray(customer.Email, emails) > -1) {
            db.linq.from(config.objectStoreName).update(customer).then(function (data) {
                showCustomer(data.object);
            }, handleError);
        } else {
            customer.CustomerID = -1;
            db.linq.from(config.objectStoreName).insert(customer).then(function (data) {
                showCustomer(data.object);
            }, handleError);
        }
    }, handleError, function (data) {
        emails.push(data.Email);
    });
}