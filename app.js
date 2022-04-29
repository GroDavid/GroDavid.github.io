let ourscore = 0;
let opponentscore = 0;
let roundsplayed = 0;
let roundstoplay = 3;


function getRndInteger(min, max, choice) {
    let end = 0;
    let opponent = Math.floor(Math.random() * (max - min)) + min;
    let player = choice;
	
    console.log("n2: " + player);
    console.log("opponent: " + opponent);
	

    //Number(n2 = 1)
    if (opponent == player) {
        end = 2; // gleichstand

    }
    if (opponent == 1 && player == 2) {
        end = 3; // win

    }
    if (opponent == 1 && player == 3) {
        end = 1; // lose

    }
    if (opponent == 2 && player == 1) {
        end = 1; // lose

    }
    if (opponent == 2 && player == 3) {
        end = 3; // win
    }
    if (opponent == 3 && player == 1) {
        end = 3; // win

    }
    if (opponent == 3 && player == 2) {
        end = 1; // lose

    }
	
	document.getElementById("RPS").src = "XVo6.gif";
	document.getElementById("opponent").src = "";
    roundsplayed += 1;
	
	
    setTimeout(function(){
	    if (player == 1) {
        document.getElementById("RPS").src="rock.png";
    }
    if (player == 2) {
        document.getElementById("RPS").src="paper.png";
    }
    if (player == 3) {
        document.getElementById("RPS").src="scissors.png";
    }
	
	
	
    if (opponent == 1) {
        document.getElementById("opponent").src="rock.png";
    }
    if (opponent == 2) {
        document.getElementById("opponent").src="paper.png";
    }
    if (opponent == 3) {
        document.getElementById("opponent").src="scissors.png";
    }
	
    if (end == 1) {
        opponentscore += 1;
    }
    if (end == 2) {
        
    }
    if (end== 3) {
        ourscore += 1;
    }
	
    document.getElementById("ourscore").innerHTML = ourscore;
    document.getElementById("opponentscore").innerHTML = opponentscore;
    gameEnd();
    
    }, 1300);


    return end;
}

function moreRounds(){
    if(roundstoplay != 99){
        roundstoplay += 1;
    }
    document.getElementById("rnds").innerHTML = roundstoplay;
}
function lessRounds(){
    if(roundstoplay != 0){
        roundstoplay -= 1;
    }
    document.getElementById("rnds").innerHTML = roundstoplay;
}

function setGameLength(){
    document.getElementById("start").disabled = true;
    document.getElementById("moreR").disabled = true;
    document.getElementById("lessR").disabled = true;
    document.getElementById("rockBtn").disabled = false;
    document.getElementById("scissorsBtn").disabled = false;
    document.getElementById("paperBtn").disabled = false;
    document.getElementById("roundNum").innerHTML = roundstoplay;
    ourscore = 0;
    opponentscore = 0;
    roundsplayed = 0;
}

function gameEnd(){
    setTimeout(function(){
        document.getElementById("roundNum").innerHTML = roundstoplay - roundsplayed;
        if(roundstoplay == roundsplayed){
            if(ourscore > opponentscore){
                dif = ourscore-opponentscore;
                document.getElementById("end").innerHTML = "You have won by the difference of: " + dif + "! Try again?";
            }
            if(ourscore < opponentscore){
                dif = opponentscore - ourscore;
                document.getElementById("end").innerHTML = "You have lost by the difference of: " + dif + "! Try again?";
            }
            if(ourscore == opponentscore){
                document.getElementById("end").innerHTML = "You have played a tie! Try again?";
            }
            document.getElementById("start").disabled = false;
            document.getElementById("moreR").disabled = false;
            document.getElementById("lessR").disabled = false;
            document.getElementById("rockBtn").disabled = true;
            document.getElementById("scissorsBtn").disabled = true;
            document.getElementById("paperBtn").disabled = true;
        }
    }, 500)
}