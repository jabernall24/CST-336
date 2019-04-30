<?php
    print_r($_FILES);
?>

<!DOCTYPE html>
<html>
    <head>
        <title> Lab 9: File upload </title>
    </head>
    <body>
        
        <h1> File Upload </h1>
        
        <form method="POST" enctype="multipart/form-data"> 
            Select file: <input type="file" name="fileName" /> <br />
            <button>Upload File!</button>
        </form>

    </body>
</html>