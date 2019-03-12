
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