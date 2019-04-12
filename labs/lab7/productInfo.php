<!DOCTYPE html>
<html>
    <head>
        <title> </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        
        <!--bootstrap-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    </head>
    <body>
        <h2 id="productName"></h2>
        
        <h3 id="productDescription"></h3>
        
        <img src="" id="productImage"/>
        
        <div id="productPrice"></div>
    <script>
        $.ajax({
            type: "GET",
            url: "api/getProductInfo.php",
            dataType: "json",
            data: {
              "productId": <?=$_GET['productId'] ?>
            },
            success: function(data,status) {
                $("#productName").html(data.productName);
                $("#productDescription").html(data.productDescription);
                $("#productPrice").html(data.productPrice);
                $("#productImage").attr('src', data.productImage);
            },
            complete: function(data,status) { //optional, used for debugging purposes
                // alert(status);
            }
        });//ajax
    </script>

    </body>
</html>