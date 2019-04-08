<?php
    session_start();
    
    // checks wether user has logged in
    
    if(!isset($_SESSION['adminName'])) {
        header('location: login.html');
    }
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
        
        <br><br><br>
        
        <form action="addProducts.php">
            <button> Add New Product </button>
        </form>
        
        <form action="logout.php">
            <button> Logout </button>
        </form>
        
        <div id="products"></div>
        
        <script SRC='js/admin.js'></script>
    </body>
</html>