
$.ajax({

    type: "GET",
    url: "../lab6/api/getProducts.php",
    dataType: "json",
    success: function(data,status) {
        data.forEach(function(product){
            $("#products").append("<div class='row'>" + 
                                                "<div class='col1'>" + 
                                                "[<a href='update.php?productId=" + product.productID + "'> Update </a>]" +
                                                "[<a href='delete.php'> Delete </a>] </div>"+
                                                "<div class='col2'>" + "Name: " + product.productName + "</div>"+
                                                "<div class='col3'>"+ "Price: $" + product.productPrice + "</div>"+
                                                "</div>");
        });
    },
    complete: function(data,status) { //optional, used for debugging purposes
        // alert(status);
    }
});//ajax