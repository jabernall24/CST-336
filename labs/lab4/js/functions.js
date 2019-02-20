
$("#zipCode").on("change", function(){
    $.ajax({
        type: "GET",
        url: "http://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php",
        dataType: "json",
        data: {
            "zip": $(this).val(),
        },
        success: function(data,status) {
            $("#city").html(data.city);
            $("#latitude").html(data.latitude);
            $("#longitude").html(data.longitude);
        },
        complete: function(data,status) { //optional, used for debugging purposes
            // alert(status);
        }

    });//ajax
}); //zipCode