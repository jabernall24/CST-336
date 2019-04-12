<?php
    
    session_start();
    
    if(!isset($_SESSION['adminName'])) {
        header('location: login.php');
    }

    include "../../dbConnection.php";
    
    $conn = getDatabaseConnection("ottermart");
    
    $sql = "DELETE FROM om_product WHERE om_product.productID = " . $_POST['productId'];

    $stmt = $conn->prepare($sql);
    $stmt->execute();
    header("location: admin.php")
?>