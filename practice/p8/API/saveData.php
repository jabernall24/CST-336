<?php
session_start();
// session_destroy();
//TODO: Save incoming data into session

if(!isset($_SESSION["progress"])){
    $_SESSION["progress"] = 0;
}else if($_SESSION["progress"] == 0){
    $_SESSION["progress"] = $_POST['progress'];
    $_SESSION["name"] = $_POST['name'];
    $_SESSION["email"] = $_POST['email'];  
}else if($_SESSION["progress"] == 1) {
    $_SESSION["progress"] = $_POST['progress'];
    $_SESSION["major"] = $_POST['major'];
    $_SESSION["zip"] = $_POST['zip'];  
}

echo json_encode($_SESSION)
?>