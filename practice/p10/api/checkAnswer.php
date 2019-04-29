<?php

//receive email and score from the quiz

//1. Get latest score based on email
//2. If record found, first display it in JSON format, then update record
//3. If record not found, insert a new record for that email

    include 'dbConnection.php';
    
    $conn = getDatabaseConnection('ottermart');
    
    $nm = array();
    $nm[":email"] = $_GET["email"];
    $score = $_GET["score"];
    $sql = "SELECT COUNT(email) count, score FROM quiz where email = :email;";

    $stmt = $conn->prepare($sql);
    $stmt->execute($nm);
    $record = $stmt->fetch(PDO::FETCH_ASSOC);
    
    $prevScore = $record["score"];

    if($record["count"] > 0) {
        $sql = "UPDATE quiz SET score = $score, taken = taken + 1 WHERE quiz.email = :email;";
    }else {
        $sql = "INSERT INTO quiz (email, score, taken) VALUES (:email, $score, quiz.taken + 1);";
    }
    
    $stmt = $conn->prepare($sql);
    $stmt->execute($nm);
    
    $sql = "SELECT * FROM quiz WHERE email = :email;";
    $stmt = $conn->prepare($sql);
    $stmt->execute($nm);
    $record = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if($prevScore) {
        $record["score"] = $prevScore;
    }else {
        $record["score"] = "none";
    }
    
    echo json_encode($record);
?>