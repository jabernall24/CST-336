
$.ajax({

    type: "GET",
    url: "api/getProducts.php",
    dataType: "json",
    success: function(data,status) {
        data.forEach(function(product){
            $("#products").append(product.productName + " $" + product.productPrice + '<br>');
        });
    },
    complete: function(data,status) { //optional, used for debugging purposes
        //alert(status);
    }

});//ajax