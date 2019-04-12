<?php
    session_start();
    
    // checks wether user has logged in
    
    if(!isset($_SESSION['adminName'])) {
        header('location: login.php');
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <title> Ottermart - Admin Section </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        
        <!--bootstrap-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        
        <link rel="stylesheet" href="css/admin.css" type="text/css" />
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

    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"> Product Info </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                    <iframe name="productIframe" src="#" width="400" height="400"></iframe>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
        
    </body>
</html>