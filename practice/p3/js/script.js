
var imageArray = ["cherry", "grapes", "seven"];
var amount = 0;

$("#playButton").on("click", function(){
    $("#amountWon").hide();
    for(let i = 0; i < 3; i++){
    let randomIndex = Math.floor(Math.random()*3);
    let randomImage= imageArray[randomIndex];
    $("#image" + (i+1)).html("<img src='img/" + randomImage + ".png' />");
}
    if($("#image1").html() == $("#image2").html() && $("#image2").html() == $("#image3").html()){
        $("#amountWon").show();        
        if($("#image1").html() == '<img src="img/seven.png">'){
            var snd = new Audio("audio/jackpot.m4a"); 
            snd.play();
            $("#result").html("Jackpot!!");
            $("#amountWon").html("You won $500");
            amount += 500;
        }else if($("#image1").html() == '<img src="img/grapes.png">'){
            $("#amountWon").html("You won $300");
            $("#result").html("Winner");
            amount += 300;
        }else{
            $("#amountWon").html("You won $100");
            $("#result").html("Winner");
            amount += 100;
        }
    }else{
        $("#result").html("Try Again!");
    }
    
    $("#totalWinnings").html("Total Winnings: $" + amount);
});

//cherries 100 grapes 300 sevens 500