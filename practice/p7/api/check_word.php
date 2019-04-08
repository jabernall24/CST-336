<?php
//Used to check the letter the user inputed in the form, and if the letter is in the word
//Should return an array of booleans as the api
    include '../dbConnection.php';
    
    $conn = getDatabaseConnection('hangman');
    
    $wordId = $_GET['wordId'];
    $letter = $_GET['letter'];
    
    $sql = "SELECT word FROM words WHERE word_id = $wordId";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $fetch = $stmt -> fetch(PDO::FETCH_ASSOC);
    
    $index = array();
    $return = array();
    
    for($i = 0; $i < strlen($fetch['word']); $i++) {
        if($letter == $fetch['word'][$i]) {
            $index[] = $i;
        }
    }
    $return["index"] = $index;
    $return["wordLength"] = strlen($fetch['word']);
    if(sizeof($index) == 0) {
        $return['hit'] = false;
    }else {
        $return['hit'] = true;
    }
    echo json_encode($return);
?>