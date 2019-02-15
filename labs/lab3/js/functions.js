
var q1_value = 20;
var q2_value = 20;
var q3_value = 20;
var q4_value = 20;
var q5_value = 20;

var q1_answer = "sacramento";
var q2_answer = "Missouri River";
var q3_answer = "Rhode Island";
var q5_answer = "seal2";

var q5_response = "";

var totalTimes = localStorage.getItem("timesTaken");


$("#submitButton").on("click", function(){
    
    if(!isFormValid()){
        return;
    }
    
    let total_points = 0;
    
    let q1_response = $("#q1").val().toLowerCase();
    let q2_response = $("#q2").val();
    let q3_response = $("input[name=q3]:checked").val();

    // Question 1
    if(q1_response == q1_answer){
       $("#q1_feedback").html("Correct").css("color", "green");
       total_points += q1_value;
    }else{
       $("#q1_feedback").html("Incorrect").css("color", "red");
    }
    
    // Question 2
    if(q2_response == q2_answer){
        $("#q2_feedback").html("Correct").css("color", "green");
        total_points += q2_value;
    }else{
        $("#q2_feedback").html("Incorrect").css("color", "red");
    }
    
    // Question 3
    if(q3_response == q3_answer){
        $("#q3_feedback").html("Correct").css("color", "green");
        total_points += q3_value;
    }else{
        $("#q3_feedback").html("Incorrect").css("color", "red");
    }
    
    // Question 4
    if($('#Jefferson').is(":checked") &&$('#Roosevelt').is(":checked") && !$('#Jackson').is(":checked") && !$('#Franklin').is(":checked")) {
        $("#q4_feedback").html("Correct").css("color", "green");
        total_points += q4_value;
    }else{
         $("#q4_feedback").html("Incorrect").css("color", "red");
    }
    
    // Question 5
    if(q5_response == q5_answer){
        $("#q5_feedback").html("Correct").css("color", "green");
        total_points += q5_value;
    }else{
         $("#q5_feedback").html("Incorrect").css("color", "red");
    }
    
    
    $("#totalPoints").html("The total Score is: " + total_points);
    
    totalTimes++;
    localStorage.setItem("timesTaken", totalTimes);
    $("#totalTimes").html("Quiz taken " + totalTimes + " time(s)");
    
    
});

$(".q5_active").on("click", function() {
    $(".q5_active").css("background", "");
    $(this).css("background-color", "yellow");
    q5_response = $(this).attr("id");
})

function isFormValid() {

    if($("#q1").val() == ""){
        return false;
    }
    
    return true;
}