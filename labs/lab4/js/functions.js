
$("#zipCode").on("change", function(){
    $.ajax({
        type: "GET",
        url: "http://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php",
        dataType: "json",
        data: {
            "zip": $("#zipCode").val(),
        },
        success: function(data,status) {
            $("#city").html(data.city);
            $("#latitude").html(data.latitude);
            $("#longitude").html(data.longitude);
        },
        complete: function(data,status) { //optional, used for debugging purposes
            if(status == "error"){
                $("#noZipCode").html("zip code not found");
            }
        }

    });//ajax
}); //zipCode

$("#submitBtn").on("click", function(){
    if ($("#userName").val().length < 4){
        $("#nameError").html("Incorrect username");
    }
    if($("#password").val().length < 6){
        $("#passwordError").html("Password needs to be at least 6 characters.");
    }
    if($("#confirmPassword").val() != $("#password").val()){
        $("#passwordError").html("Retype password");
    }
});
//ipoilliot@csumb.edu  ilona poilliot
$("#userName").on("change", function() {
    $.ajax({
        type: "GET",
        url: "http://myspace.csumb.edu/~milara/ajax/username/usernameLookup.php",
        dataType: "json",
        data: {
            "username": $("#userName").val(),
        },
        success: function(data,status) {
            if (data.available == "true"){
                $("#nameError").html("Valid Name").css("color", "green");
            }else{
                $("#nameError").html("Invalid Name").css("color", "red");
            }
        },
        complete: function(data,status) { //optional, used for debugging purposes
            // alert(status);
        }

    });//ajax
});

$("#state").on("change", function(){
    $.ajax({
        type: "GET",
        url: "http://itcdland.csumb.edu/~milara/ajax/countyList.php",
        dataType: "json",
        data: {
            "state": $("#state").val(),
        },
        success: function(data,status) {
            $("#county").html("<option> Select One </option>");
            for(let i = 0; i < data.length; i++){
                $("#county").append("<option>" + data[i].county + "</option>");
            }
        },
        complete: function(data,status) { //optional, used for debugging purposes
            // alert(status);
        }

    });//ajax
}); // state