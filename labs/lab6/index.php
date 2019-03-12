<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title> Lab 6: Otter Mart Product Search </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
        
        <h1> OtterMart Product Search </h1>
        
        <form>
            Product: <input type="text" name="product"/> 
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
            
            <input type="radio" name="orderBy" id="orderByPrice"/><label for="orderByPrice"> Price </label> <br>
            <input type="radio" name="orderBy" id="orderByName"/><label for="orderByName"> Name </label>
            
            <br><br>
        </form>
        
        <button id="searchForm"> Search </button>
        
        <div id="products"></div>
        
        <script SRC="js/functions.js"></script>
    </body>
</html>