<?php
    session_start(); // starts or resumes an existing session
    include "../../dbConnection.php";
    
    $conn = getDatabaseConnection("ottermart");
    
    $username = $_POST['username'];
    $password = sha1($_POST['password']);
    $nm = array();

    $sql = "SELECT * FROM om_admin WHERE username = :username AND password = :password";
    $nm[':username'] = $username;
    $nm[':password'] = $password;
    $stmt = $conn->prepare($sql);
    $stmt->execute($nm);
    $record = $stmt->fetch(PDO::FETCH_ASSOC);

    if(empty($record)) {
        header('location: login.php?error=Error: Incorrect username or password');
    }else {
        header('location: admin.php'); // redirecting to new file
        
        $_SESSION['adminName'] = $record['firstName'] . " " . $record['lastName'];
    }
?>