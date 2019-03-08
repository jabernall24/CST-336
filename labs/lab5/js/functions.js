
$("#username1").on("change", function(){
    $.ajax({

        type: "GET",
        url: "api/checkUsername_text.php",
        data: { 
            "username": $("#username1").val()
        },
        success: function(data,status) {
            $("#username1Error").html(data);
        },
        complete: function(data,status) { //optional, used for debugging purposes
            //alert(status);
        }
    
    });//ajax   
}); // username1

$("#username2").on("change", function(){
    $.ajax({

        type: "GET",
        url: "api/checkUsername_json.php",
        dataType: 'json',
        data: { 
            "username": $("#username2").val()
        },
        success: function(data,status) {
            if(data.available){
                $("#username2Error").html('Username is available').css('color', 'green');
            }else{
                $("#username2Error").html('Username is already TAKEN').css('color', 'red');
            }
        },
        complete: function(data,status) { //optional, used for debugging purposes
            //alert(status);
        }
    
    });//ajax   
}); // username1

$("#password").on("click", function(){
    $.ajax({
        
        type: "GET",
        url: "api/strongPasswordAPI.php",
        dataType: 'json',
        data: { 
            "length": 10
        },
        success: function(data,status) {
            $("#passwordError").html(data.suggestedPwd);
        },
        complete: function(data,status) { //optional, used for debugging purposes
            //alert(status);
        }
        
    });//ajax   
}); // password

$("#password").on("change", function(){
    $.ajax({
        
        type: "GET",
        url: "api/validatePwd.php",
        dataType: 'json',
        data: { 
            "password": $("#password").val(),
            "username": $("#username1").val()
        },
        success: function(data,status) {
            $("#passwordError").html(data.validPwd);
        },
        complete: function(data,status) { //optional, used for debugging purposes
            //alert(status);
        }
        
    });//ajax   
}); // password