var suits = ["hearts","diamonds","clubs","spades"];
var cardValue =  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
var deck = [];
var hiddenCard;

var dealerAce = 0;
var userAce = 0;
var dealerTotal = 0;
var userTotal = 0;

function blackJackGo(){
document.getElementById("hit").disabled = true;
document.getElementById("stay").disabled = true;
}

function startBlackJack(){
    createDeck();
    dealHands();
    updateScores();

    document.getElementById("hiddenCard").style.display = "inline";
    document.getElementById("start").disabled = true;
    document.getElementById("hit").disabled = false;
    document.getElementById("stay").disabled = false;
}

function createDeck(){/// must be called when page loaded
    var card = "";
    for(var i=0; i<13;i++){
        for(var j = 0;j<4;j++){
            card = cardValue[i] + "_of_" + suits[j]
            deck.push(card);
        }
    }
    shuffleCards();
}

function shuffleCards(){
    for(var i = 0;i<deck.length ;i++){
        var randomPosition = Math.floor(Math.random() * deck.length);
        var oldCardPosition = deck[i];

        deck[i] = deck[randomPosition]
        deck[randomPosition] = oldCardPosition;
    }
}

function dealHands(){
    //dealer hand 
    hiddenCard = deck.pop();
    var addDealerPoints = evaluatePoints(hiddenCard);
    var addUserPoints;
    dealerTotal += addDealerPoints; 
    console.log(hiddenCard);
    
    while(dealerTotal<17){
        addDealerPoints  = drawCard("dealerHand");
        if(addDealerPoints == 11){
            dealerAce +=1
        }
        dealerTotal += addDealerPoints; 
    }
    //user hand
    for(var i = 1;i<=2;i++){
        addUserPoints  = drawCard("userHand");  
        if(addUserPoints == 11){
            userAce += 1;
        }  
        userTotal+= addUserPoints;
    }

}

function evaluatePoints(card){
    var cardPoints = card.split("_of_");
    var value = parseInt(cardPoints[0]);

    if(value==1){
        value = 11;
    }
    for(var i = 2; i<=10;i++){
            if(i==value){
                value = i
            }
    }
    if(cardPoints[0]==("king")||cardPoints[0]==("queen")||cardPoints[0]==("jack")){
        value = 10
    }
    return value;
}

function drawCard(player){
    var card = deck.pop();
    var faceUp = document.createElement("img");
        faceUp.src = src = "cards/" + card + ".png";
    var result = evaluatePoints(card);
    document.getElementById(player).appendChild(faceUp);
    return result;
}

function updateScores(){
    document.getElementById("dealerTotal").innerHTML = dealerTotal;
    document.getElementById("userTotal").innerHTML = userTotal;
}

function hit(){
    if(userTotal<21){
        addUserPoints  = drawCard("userHand");    
        if(addUserPoints == 11){
            userAce += 1;
        }  
        userTotal+= addUserPoints;
    }
        updateScores();

    if(userTotal>=21){
        aceValue();
        if(userTotal>21){
        document.getElementById("hit").disabled = true;
        }
        return;
    }
}

function stay(){
    aceValue();
    updateScores();

    document.getElementById("hiddenCard").src = "./cards/" + hiddenCard + ".png";
    var verdict = document.getElementById("verdict");

    if(userTotal > 21){
        verdict.innerHTML = "Too many points, You Lost!"
    } else if(dealerTotal>21){
        verdict.innerHTML = "Dealer has too many points, You Won!"
    } else if(userTotal>dealerTotal){
        verdict.innerHTML = "You have more points then the dealer, You Won!"
    } else if(userTotal<dealerTotal){
        verdict.innerHTML = "Dealer has more points, You Lost!"
    } else{
        verdict.innerHTML = "You and the dealer have equal points, Draw"
    }

    document.getElementById("dealerTotal").style.display = "inline";
}

function aceValue(){
    if((dealerTotal>21)&&(dealerAce>0)){
        dealerTotal = dealerTotal - 10;
        dealerAce -= 1
    }
    if(userTotal>21&&userAce>0){
        userTotal= userTotal - 10;
        userAce -= 1
    }
}

function jackBlackReset(){
    window.location.reload();
}