
$.ajax({

    type: "GET",
    url: "../lab6/api/getProducts.php",
    dataType: "json",
    success: function(data,status) {
        data.forEach(function(product){
            $("#products").append("<div class='row'>" + 
                                                "<div class='col1'>" + 
                                                "<a class=\"btn btn-primary\"  href='update.php?productId=" + product.productID +"'> Update </a>" +
                                                "<form action='delete.php' method='post' onsubmit='return confirmDelete()'>"+
                                                "<input type='hidden' name='productId' value='"+ product.productID + "'>" +
                                                "<button class=\"btn btn-outline-danger\">Delete</button></form>" +
                                                "<a target='productIframe' onclick='openModal()' href='productInfo.php?productId="+product.productID+"'> " + product.productName + "</a></div>"+
                                                "<div class='col2'>"+"$" + product.productPrice + "</div>"+
                                                "</div><br>");
        });
    },
    complete: function(data,status) { //optional, used for debugging purposes
        // alert(status);
    }
});//ajax

function confirmDelete() {
    return confirm("You sure you want to delete this product?");
}

function openModal() {
    $('#productModal').modal("show");
}