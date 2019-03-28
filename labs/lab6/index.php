<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title> Lab 6: Otter Mart Product Search </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" href="css/styles.css" type="text/css" />
        
        <!--bootstrap-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

    </head>
    <body>
        
        <h1> OtterMart Product Search </h1>
        
        <form>
            Product: <input type="text" name="product" id="productName"/> 
            <br>
            
            Category 
            <select name="category">
                <option value="">Select One</option>
            </select>
            <br>
            
            Price: from <input type="text" name="priceFrom" size="7"/> 
                     to <input type="text" name="priceTo" size="7"/>
            <br>
            
            Order result by:
            <br>
            
            <input type="radio" name="orderBy" id="orderByPrice" value="productPrice"/><label for="orderByPrice"> Price </label> <br>
            <input type="radio" name="orderBy" id="orderByName" value="productName"/><label for="orderByName"> Name </label>
            
            <br><br>
            
        </form>
        
        <button id="searchForm"> Search </button>
        
        <table id="products">
            <th> Name </th>
            <th> Description </th>
            <th> History </th>
            <th> Price </th>
        </table>
        
        <div class="modal" tabindex="-1" role="dialog" id="purchaseHistoryModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"> Product History </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="history"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"> Close </button>
                    </div>
                </div>
            </div>
        </div>

        <script SRC="js/functions.js"></script>
    </body>
</html>