
let amountSaved = 0;
let product1Price = 0;
let product2Price = 0;

$.ajax({
    type: "GET",
    url: "api/getProducts.php",
    dataType: 'json',
    success: function(data,status) {
        let randomProduct = data[Math.floor(Math.random()*data.length)]
        product1Price = randomProduct.productPrice;
        $("#randomProduct").html(randomProduct.productName);
        $("#randomUnitPrice").html("$" + randomProduct.productPrice);
        $("#randomQuantity").val("1");
        $("#randomTotal").html("$" + randomProduct.productPrice);
        
        $("[name=allProducts]").html("<option></option>");
        data.forEach(function(product) {
            $("[name=allProducts]").append("<option value='" + product.productId + "'>" + product.productName + "</option>");
        });
    },
    complete: function(data,status) { //optional, used for debugging purposes
        //alert(status);
    }
    
});//ajax   

$.ajax({
    type: "GET",
    url: "api/randomDiscountCode.php",
    dataType: 'json',
    success: function(data,status) {
        $("#promoCode").val(data.promoCode);
        $("#expirationDate").html("The Promo Code expires on " + data.expirationDate).css('color', 'red');
        $("#discountPercent").html(data.discount + "%");
        amountSaved = (data.discount * .01) * (product1Price + product2Price);
        $("#amountSaved").html("$" + amountSaved);
        
    },
    complete: function(data,status) { //optional, used for debugging purposes
        // alert(status);
    }
    
});//ajax  

$("[name=allProducts]").on('change', function() {
    $.ajax({
        type: "GET",
        url: "api/getAProduct.php",
        dataType: 'json',
        data: {
            'productId': $("[name=allProducts]").val()
        },
        success: function(data,status) {
            $("#userUnitPrice").html("$" + data.productPrice);
            $("#userQuantity").val("1");
            $("#userTotal").html("$" + data.productPrice);
            product2Price = data.productPrice;
        },
        complete: function(data,status) { //optional, used for debugging purposes
            //alert(status);
        }
    
    });//ajax  
}); // [name=allProducts]

function update() {
    let subtotal = (product1Price + product2Price) - amountSaved;
    $("#subtotal").html("$" + subtotal);
    let tax = subtotal * 0.1;
    $("#tax").html("$" + tax);
    let total = subtotal + tax;
    $("#total").html("$" + total);
}