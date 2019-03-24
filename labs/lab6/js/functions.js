
$.ajax({

    type: "GET",
    url: "api/getProducts.php",
    dataType: "json",
    success: function(data,status) {
        data.forEach(function(product){
            $("[name=category]").append('<option value=' + product['catId'] + '>'
                                    +  product['catName'] + '</option>');
        });
    },
    complete: function(data,status) { //optional, used for debugging purposes
        //alert(status);
    }

});//ajax

$("#searchForm").on('click', function(){
    // alert($("#priceFrom").val());
    // alert($("#priceTo").val());
    $.ajax({
        type: "GET",
        url: "api/getSearchResults.php",
        dataType: "json",
        data: {
            "productName": $("#productName").val(),
            "category": $("[name=category]").val(),
            "priceFrom": $("#priceFrom").val(),
            "priceTo": $("#priceTo").val(),
            "orderBy": $("[name=orderBy]:checked").val()
        },
        success: function(data, success){
            $("#products").html("<th> Name </th><th> Description </th><th> Image </th><th> Price </th>");
            data.forEach(function(product){
                $("#products").append("<tr>");
                $("#products").append("<td>" + product['productName'] + "</td>");
                $("#products").append("<td>" + product['productDescription'] + "</td>");
                $("#products").append("<td>" + "<a href=" + product['productImage'] + ">image</a>");
                $("#products").append("<td>" + "$" + product['productPrice'] + "</td>");
                $("#products").append("</tr>");
            });
        },
        complete: function(data, status){
            // alert(status);
        }
    }); // ajax
}); // searchForm