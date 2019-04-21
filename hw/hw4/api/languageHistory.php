<?php

    include '../../../dbConnection.php';
    
    $conn = getDatabaseConnection('c9');
    
    $action = $_GET['action'];
    
    $language = $_GET['language'];
    $languageAbbr = $_GET['languageAbbr'];
    $confidence = $_GET['confidence'];
    $text = $_GET['text'];
    $order = $_GET['order'];
    
    $sql = "";
    $nm = array();
    
    switch($action) {
        case 'insert':
            $sql = "INSERT INTO hw4 (language, languageAbbr, confidence, text) VALUES (:language, :languageAbbr, :confidence, :text);";
            $nm[":language"] = $language;
            $nm[":languageAbbr"] = $languageAbbr;
            $nm[":confidence"] = $confidence;
            $nm[":text"] = $text;
            $stmt = $conn->prepare($sql);
            $stmt->execute($nm);
            break;
        default: break;
    }
    
    $np = array();
    
    $sql = "SELECT * FROM hw4 ";
    if($order != "Recent") {
        $sql .= "WHERE language = :order ";
        $np[":order"] = $order;
    }
    $sql .= "ORDER BY hw4.id DESC LIMIT 20;";

    $stmt = $conn->prepare($sql);
    $stmt->execute($np);
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($records);
?>