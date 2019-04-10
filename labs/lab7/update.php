<!DOCTYPE html>
<html>
    <head>
        <title> </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
        <h1> Update Product </h1>
        Name: <input type="text" id="productName" size="75"/> <br>
        Description: <textarea id="productDescription" cols-"40" rows="3"></textarea> <br>
        Image: <input type="text" id="productImage" size="75"/> <br>
        Price: $<input type="text" id="productPrice"/> <br>
        Category: 
        <select id="catId">
            <option> Select One </option>
        </select>
        
        <br>
        
        <button id="updateProduct"> Update Product </button>
        <br>
        <span id="message"></span>
        <script>
            
            $.ajax({
                type: "GET",
                url: "../lab6/api/getCategories.php",
                dataType: "json",
                success: function(data,status) {
                    data.forEach(function(product){
                        $("#catId").append("<option value='" + product['catId'] + "'>" + product["catName"] + "</option>");
                    });
                    getProductInfo();
                },
                complete: function(data,status) { //optional, used for debugging purposes
                    // alert(status);
                }
            });//ajax
            
            function getProductInfo() {
                $.ajax({
                    type: "GET",
                    url: "api/getProductInfo.php",
                    dataType: "json",
                    data: {
                      "productId": <?=$_GET['productId'] ?>
                    },
                    success: function(data,status) {
                        $("#productName").val(data.productName);
                        $("#productDescription").val(data.productDescription);
                        $("#productPrice").val(data.productPrice);
                        $("#productImage").val(data.productImage);
                        $("#catId").val(data.catId).change();
                    },
                    complete: function(data,status) { //optional, used for debugging purposes
                        // alert(status);
                    }
                });//ajax
            }
            
    
            $("#updateProduct").on('click', function(){
                $.ajax({
                    type: "GET",
                    url: "api/updateProduct.php",
                    data: {
                        "productName": $("#productName").val(),
                        "productDescription": $("#productDescription").val(),
                        "productImage": $("#productImage").val(),
                        "productPrice": $("#productPrice").val(),
                        "catId": $("#catId").val(),
                        "productId": <?=$_GET['productId'] ?>
                    },
                    success: function(data,status) {
                        $("#message").html("Product was updated succesfully");
                    },
                    complete: function(data,status) { //optional, used for debugging purposes
                        // alert(status);
                    }
                });//ajax
            });
        </script>
    </body>
</html>