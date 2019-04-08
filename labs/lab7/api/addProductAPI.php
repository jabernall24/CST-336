<?php
    include "../../../dbConnection.php";
    
    $conn = getDatabaseConnection('ottermart');

    $name = $_GET['productName'];
    $description = $_GET['productDescription'];
    $image = $_GET['productImage'];
    $price = $_GET['productPrice'];
    $catId = $_GET['catId'];
    $np = array();
    
    $sql = "INSERT INTO om_product (`productName`, `productDescription`, `productImage`, `productPrice`, `catId`)
    VALUES(:name, :description, :image, :price, :id);";
    $np[':name'] = $name;
    $np[':description'] = $description;
    $np[':image'] = $image;
    $np[':price'] = $price;
    $np[':id'] = $catId;
    
    $stmt = $conn->prepare($sql);
    $stmt->execute($np);
    
    $sql = "SELECT COUNT(1) totalProducts FROM om_product";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $record = $stmt->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($record);
?>