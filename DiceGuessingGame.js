//global variables
var dice1 = (Math.floor(Math.random()*6)+1);
var dice2 = (Math.floor(Math.random()*6)+1);
var dice3 = (Math.floor(Math.random()*6)+1);
var dice4 = (Math.floor(Math.random()*6)+1);
var dice5 = (Math.floor(Math.random()*6)+1);
var dice6 = (Math.floor(Math.random()*6)+1);
var count = 5;
var score = 0;

function easyMode(){
    document.getElementById("activityHome").style.display="none";
    document.getElementById("activityVerdict").style.display="none";
    document.getElementById("activityTime").style.display="inline";
    document.getElementById("gameMode").innerHTML = "Easy ";
    document.getElementById("dicenum").innerHTML = "the";
    document.getElementById("submit").setAttribute("onclick","easyRoll()");
    document.getElementById("hint").innerHTML = "Hint: ";
    document.getElementById("chance").innerHTML = "Guess Count: ";
    document.getElementById("input").setAttribute("min","0");
    document.getElementById("input").setAttribute("max","6");
}

function normalMode(){
    document.getElementById("activityHome").style.display="none";
    document.getElementById("activityVerdict").style.display="none";
    document.getElementById("activityTime").style.display="inline";
    document.getElementById("gameMode").innerHTML = "Normal ";
    document.getElementById("dicenum").innerHTML = "3 Different";
    document.getElementById("submit").setAttribute("onclick","normalRoll()");
    document.getElementById("hint").innerHTML = "Hint: ";
    document.getElementById("chance").innerHTML = "Guess Count: ";
    document.getElementById("input").setAttribute("min","0");
    document.getElementById("input").setAttribute("max","18");

}

function hardMode(){
    document.getElementById("activityHome").style.display="none";
    document.getElementById("activityVerdict").style.display="none";
    document.getElementById("activityTime").style.display="inline";
    document.getElementById("gameMode").innerHTML = "Hard ";
    document.getElementById("dicenum").innerHTML = "5 Different";
    document.getElementById("submit").setAttribute("onclick","hardRoll()");
    document.getElementById("hint").innerHTML = "Hint: ";
    document.getElementById("chance").innerHTML = "Guess Count: ";
    document.getElementById("input").setAttribute("min","0");
    document.getElementById("input").setAttribute("max","36");
}

function back(){
    document.getElementById("activityTime").style.display="none";
    document.getElementById("activityVerdict").style.display="none";
    document.getElementById("activityHome").style.display="inline";
    count = 5
}

function rollAgain(){
    document.getElementById("activityTime").style.display="none";
    document.getElementById("activityVerdict").style.display="none";
    document.getElementById("activityHome").style.display="inline";
    count = 5

    dice1 = (Math.floor(Math.random()*6)+1);
    dice2 = (Math.floor(Math.random()*6)+1);
    dice3 = (Math.floor(Math.random()*6)+1);
    dice4 = (Math.floor(Math.random()*6)+1);
    dice5 = (Math.floor(Math.random()*6)+1);
    dice6 = (Math.floor(Math.random()*6)+1);
}


function winScreen(){
    document.getElementById("activityHome").style.display="none";
    document.getElementById("activityTime").style.display="none";
    document.getElementById("activityVerdict").style.display="inline";
    document.getElementById("verdict2").innerHTML = "Congratulations!!!";
    document.getElementById("verdict3").innerHTML = "You Guessed The correct Number!";


    count = 5
}

function loseScreen(){
    document.getElementById("activityHome").style.display="none";
    document.getElementById("activityTime").style.display="none";
    document.getElementById("activityVerdict").style.display="inline";
    document.getElementById("verdict2").innerHTML = "Sorry, YOU LOSE!";
    document.getElementById("verdict3").innerHTML = "You Ran Out of Chances!";
}

function easyRoll(){
    var hint = document.getElementById("hint");
    var chance = document.getElementById("chance");
    var a = document.getElementById("input").value;

    var roll = dice1;

  //  alert("number " + roll + ", input: " + a);

    if(roll == a){           
        hint.innerHTML = "You win";
        chance.innerHTML= "Guess Count: " + count + " chances left";
        winScreen();
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
    else{
        if(roll<a){
            count--;
            hint.innerHTML = "Hint: The dice roll is lower then your Guess!";
            chance.innerHTML= "Guess Count: " + (count) + " chances left";
        }
        else{
            count--;
            hint.innerHTML = "Hint: The dice roll is higher then your Guess!";
            chance.innerHTML= "Guess Count: " + (count) + " chances left";
        }

        if(count==0){
            loseScreen()
        }
}
}

function normalRoll(){
    var hint = document.getElementById("hint");
    var chance = document.getElementById("chance");
    var a = document.getElementById("input").value;

    var roll = dice1 + dice2 + dice3;

 //   alert("number " + roll + ", input: " + a);

    if(roll == a){           
        hint.innerHTML = "You win";
        chance.innerHTML= "Guess Count: " + count + " chances left";
        winScreen();
        score = score + 3;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
    else{
        if(roll<a){
            count--;
            hint.innerHTML = "Hint: The dice roll is lower then your Guess!";
            chance.innerHTML= "Guess Count: " + (count) + " chances left";
        }
        else{
            count--;
            hint.innerHTML = "Hint: The dice roll is higher then your Guess!";
            chance.innerHTML= "Guess Count: " + (count) + " chances left";
        }

        if(count==0){
            //send to end screen endScreen()
        }
        if(count==0){
            loseScreen()
        }
}
}

function hardRoll(){
    var hint = document.getElementById("hint");
    var chance = document.getElementById("chance");
    var a = document.getElementById("input").value;

    var roll = dice1 + dice2 + dice3 + dice4 + dice5 + dice6;

 //   alert("number " + roll + ", input: " + a);
    if(roll == a){           
        hint.innerHTML = "You win";
        chance.innerHTML= "Guess Count: " + count + " chances left";
        winScreen();
        score = score + 5;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
    else{
        if(roll<a){
            count--;
            hint.innerHTML = "Hint: The dice roll is lower then your Guess!";
            chance.innerHTML= "Guess Count: " + (count) + " chances left";
        }
        else{
            count--;
            hint.innerHTML = "Hint: The dice roll is higher then your Guess!";
            chance.innerHTML= "Guess Count: " + (count) + " chances left";
        }

        if(count==0){
            loseScreen()
        }
}
}
