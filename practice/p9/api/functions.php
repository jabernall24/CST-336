<?php
    session_start();
    include '../../../dbConnection.php';
    
    $conn = getDatabaseConnection('c9');
    
    $option = $_GET['option'];
    $question = $_GET['question'];

    if(!$_SESSION['submitted']) {
        $_SESSION['submitted'] = true;
        $sql = "UPDATE poll_response SET `$option` = `$option` + 1 WHERE poll_response.pollId = '$question';";
        $stmt = $conn->prepare($sql);
        $stmt->execute($nm);
    }

    $sql = "SELECT * FROM poll_response";
    $stmt = $conn->prepare($sql);
    $stmt->execute($nm);
    $record = $stmt->fetch(PDO::FETCH_ASSOC);
    $record['valid'] = true;
    echo json_encode($record);
    
?>