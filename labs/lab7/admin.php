<?php
    session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <title> Ottermart - Admin Section </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>

        <h1> Ottermart - Admin Section </h1>
        
        Welcome <?=$_SESSION['adminName']?>
        
        <select name='category'></select>
        
        <script SRC='js/functions.js'></script>
    </body>
</html>