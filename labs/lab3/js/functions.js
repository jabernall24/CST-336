
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
var q5_selected = false;

var totalTimes = localStorage.getItem("timesTaken");
var scoresArray = localStorage.getItem("scoreHistory");
if (scoresArray == null) {
    scoresArray = [];
}else{
    scoresArray = scoresArray.split(",");
}

$("#submitButton").on("click", function(){
    
    $("#validSubmission").html("");
    $("#perfectScore").html("");
    
    if(!isFormValid()){
        return;
    }
    
    let total_points = 0;
    
    let q1_response = $("#q1").val().toLowerCase();
    let q2_response = $("#q2").val();
    let q3_response = $("input[name=q3]:checked").val();

    // Question 1
    if(q1_response == q1_answer){
       $("#q1_feedback").html("Correct").attr("class", "correct");
       $("#q1_mark").html("<img src='img/checkmark.png' alt='checkmark'>")
       total_points += q1_value;
    }else{
       $("#q1_feedback").html("Incorrect").attr("class", "incorrect");
       $("#q1_mark").html("<img src='img/xmark.png' alt='xmark'>")
    }
    
    // Question 2
    if(q2_response == q2_answer){
        $("#q2_feedback").html("Correct").attr("class", "correct");
        $("#q2_mark").html("<img src='img/checkmark.png' alt='checkmark'>")
        total_points += q2_value;
    }else{
        $("#q2_feedback").html("Incorrect").attr("class", "incorrect");
        $("#q2_mark").html("<img src='img/xmark.png' alt='xmark'>")
    }
    
    // Question 3
    if(q3_response == q3_answer){
        $("#q3_feedback").html("Correct").attr("class", "correct");
        $("#q3_mark").html("<img src='img/checkmark.png' alt='checkmark'>")
        total_points += q3_value;
    }else{
        $("#q3_feedback").html("Incorrect").attr("class", "incorrect");
        $("#q3_mark").html("<img src='img/xmark.png' alt='xmark'>")
    }
    
    // Question 4
    if($('#Jefferson').is(":checked") &&$('#Roosevelt').is(":checked") && !$('#Jackson').is(":checked") && !$('#Franklin').is(":checked")) {
        $("#q4_feedback").html("Correct").attr("class", "correct");
        $("#q4_mark").html("<img src='img/checkmark.png' alt='checkmark'>")
        total_points += q4_value;
    }else{
         $("#q4_feedback").html("Incorrect").attr("class", "incorrect");
         $("#q4_mark").html("<img src='img/xmark.png' alt='xmark'>")
    }
    
    // Question 5
    if(q5_response == q5_answer){
        $("#q5_feedback").html("Correct").attr("class", "correct");
        $("#q5_mark").html("<img src='img/checkmark.png' alt='checkmark'>")
        total_points += q5_value;
    }else{
         $("#q5_feedback").html("Incorrect").attr("class", "incorrect");
         $("#q5_mark").html("<img src='img/xmark.png' alt='xmark'>")
    }
    
    if(total_points == 100){
        $("#perfectScore").html("Congrats you got a perfect score!").attr("class", "correct");
    }
    
    $("#totalPoints").html("The total Score is: " + total_points);
    
    totalTimes++;
    localStorage.setItem("timesTaken", totalTimes);
    $("#totalTimes").html("Quiz taken " + totalTimes + " time(s)");
    scoresArray.push(total_points);
    localStorage.setItem("scoreHistory", scoresArray);
    
    $("#prevScores").html("Score History: ");
    scoresArray.forEach(function(score){
        $("#prevScores").append(score + " ");
    });
    
});

$(".q5_active").on("click", function() {
    $(".q5_active").css("background", "");
    $(this).css("background-color", "yellow");
    q5_response = $(this).attr("id");
    q5_selected = true;
});

function isFormValid() {
    
    let isValid = true;
    if($("#q1").val() == ""){
        $("#validSubmission").append("Question 1 not answered.<br>");
        isValid = false;
    }
    if($("#q2").val() == ""){
        $("#validSubmission").append("Question 2 not answered.<br>");
        isValid = false;
    }
    if($("input[name=q3]:checked").length == 0){
        $("#validSubmission").append("Question 3 not answered.<br>");
        isValid = false;
    }
    if(!$('#Jefferson').is(":checked") && !$('#Roosevelt').is(":checked") && !$('#Jackson').is(":checked") && !$('#Franklin').is(":checked")){
        $("#validSubmission").append("Question 4 not answered.<br>");
        isValid = false;
    }
    if(!q5_selected){
        $("#validSubmission").append("Question 5 not answered.<br>");
        isValid = false;
    }
    
    return isValid;
}