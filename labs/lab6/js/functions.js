
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
            "priceFrom": $("[name=priceFrom]").val(),
            "priceTo": $("[name=priceTo]").val(),
            "orderBy": $("[name=orderBy]:checked").val()
        },
        success: function(data, success){
            $("#products").html("<th> Name </th><th> Description </th><th> History </th><th> Price </th>");
            data.forEach(function(product){
                $("#products").append("<tr>");
                $("#products").append("<td>" + product['productName'] + "</td>");
                $("#products").append("<td>" + product['productDescription'] + "</td>");
                $("#products").append("<td>" + "<a href='#' class='historyLink' id='" + product['productID'] + "'>view</a>");
                $("#products").append("<td>" + "$" + product['productPrice'] + "</td>");
                $("#products").append("</tr>");
            });
        },
        complete: function(data, status){
            // alert(status);
        }
    }); // ajax
}); // searchForm

$(document).on('click', '.historyLink', function() {
    $("#purchaseHistoryModal").modal("show");
    $.ajax({

        type: "GET",
        url: "api/getPurchaseHistory.php",
        dataType: "json",
        data: {
            "productId": $(this).attr("id")
        },
        success: function(data,status) {
            if(data.length != 0) {
                $("#history").html("");
                $("#history").append(data[0]['productName'] + "<br />");
                $("#history").append("<img src='" + data[0]['productImage'] + "' width='200' /> <br />");
                data.forEach(function(key) {
                    $("#history").append("Purchase date: " + key['purchaseDate'] + "<br>");
                    $("#history").append("Unit price: $" + key['unitPrice'] + "<br>");
                    $("#history").append("Quantity: " + key['quantity'] + "<br>");
                })
            }else{
                $("#history").html("No purchase history for this item.");
            }
        },
        complete: function(data,status) { //optional, used for debugging purposes
            //alert(status);
        }

    });//ajax
}); // document