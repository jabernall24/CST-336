<?php
    session_start();
    if(!isset($_SESSION['adminName'])) {
        header('location: login.html');
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    
    <body>
        <h1> Add new product </h1>
        
        Name: <input type="text" id="productName" size="75"/> <br>
        Description: <textarea id="productDescription" cols-"40" rows="3"></textarea> <br>
        Image: <input type="text" id="productImage" size="75"/> <br>
        Price: $<input type="text" id="productPrice"/> <br>
        Category: 
        <select id="catId">
            <option> Select One </option>
        </select>
        
        <br>
        
        <button id="addProduct"> Add Product </button>
        
        <br><br>
        
        <strong> Total Products: </strong><span id="totalProducts"></span>
        
        <script SRC='js/addProducts.js'></script>

    </body>
</html>