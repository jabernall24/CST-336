<?php
    session_start();
    if(!isset($_SESSION['adminName'])) {
        exit();
    }
    
    include "../../../dbConnection.php";
    
    $conn = getDatabaseConnection('ottermart');
    
    $name = $_GET["productName"];
    $description = $_GET["productDescription"];
    $image = $_GET["productImage"];
    $price = $_GET["productPrice"];
    $catId = $_GET["catId"];
    $productId = $_GET["productId"];
    print_r($image);
    $nm = array();
    
    $sql = "UPDATE om_product SET
            productName = :name,
            productDescription = :description,
            productImage = :image,
            productPrice = $price,
            catId = $catId
            WHERE om_product.productID = $productId;";
    
    $nm[':name'] = $name;
    $nm[':description'] = $description;
    $nm[':image'] = $image;
    
    $stmt = $conn->prepare($sql);
    $stmt->execute($nm);
?>