<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <head>
        <title> Admin Login Screen </title>
        <link rel="stylesheet" href="css/login.css" type="text/css" />
    </head>
    <body>
        
        <form method="POST" action="loginProcess.php">
            Username: <input type="text" name="username"/> <br>
            Password: <input type="password" name="password"/> <br>
            
            <input type="submit" value="Login"/>
        </form>
        
        <span id="error"><?= $_GET['error']?></span>
    </body>
</html>