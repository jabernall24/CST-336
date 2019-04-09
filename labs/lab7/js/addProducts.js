        
$.ajax({
    type: "GET",
    url: "../lab6/api/getCategories.php",
    dataType: "json",
    success: function(data,status) {
        data.forEach(function(product){
            $("#catId").append("<option value='" + product['catId'] + "'>" + product["catName"] + "</option>");
        });
    },
    complete: function(data,status) { //optional, used for debugging purposes
        // alert(status);
    }
});//ajax

$("#addProduct").on('click', function() {
    $.ajax({
        type: "GET",
        url: "api/addProductAPI.php",
        dataType: "json",
        data: {
            "productName": $("#productName").val(),
            "productDescription": $("#productDescription").val(),
            "productImage": $("#productImage").val(),
            "productPrice": $("#productPrice").val(),
            "catId": $("#catId").val()
        },
        success: function(data,status) {
            $("#totalProducts").html(data['totalProducts']);
        },
        complete: function(data,status) { //optional, used for debugging purposes
            // alert(status);
        }
    });//ajax
});
