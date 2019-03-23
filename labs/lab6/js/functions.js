
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
    $.ajax({
        type: "GET",
        url: "api/getSearchResults.php",
        dataType: "json",
        data: {
            "productName": $("#productName").val(),
            "category": $("[name=category]").val(),
            "priceFrom": $("[name=priceFrom").val(),
            "priceTo": $("[name=priceTo").val()
        },
        success: function(data, success){
            $("products").html("");
            data.forEach(function(product){
                $("#products").append(product['productName']);
            });
        },
        complete: function(data, status){
            // alert(status);
        }
    }); // ajax
}); // searchForm