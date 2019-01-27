/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore,previousScore1, previousScore1, activePlayer,isGamePlayed,winningScore;


function initialize(){

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    previousScore1 = 0;
    previousScore2 = 0;

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector("#name-0").classList.remove('winner');
    document.querySelector("#name-1").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-0-panel").classList.add('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    resetCurrent();
    var inputScoreDOM = document.querySelector(".input-score");
    winningScore = parseInt(inputScoreDOM.value);
}

initialize();

function resetCurrent()
{
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent ="0";

    document.querySelector(".dice-1").style.display = 'none';
    document.querySelector(".dice-2").style.display = 'none';
}

function changeActivePlayer()
{
    activePlayer = activePlayer === 0 ? 1 :0;
    roundScore =0;
    previousScore = 0;

    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle("active");
}

function nextPlayer()
{
   
    changeActivePlayer();
    resetCurrent();
}

function getRandomDice()
{
    return 1 + Math.floor(Math.random() * 6);
}

function getRollActions(diceDOM,dice,previousScore,roundScore)
{
        var isNextPlayerActive =false;
        if(dice === 1 ||((dice === 6) && (previousScore === 6)))
        {
            alert("Ooops lost. One of your "+diceDOM.classList[0]+" rolled as :" + dice);
            nextPlayer();
            isNextPlayerActive = true;
        }
        else
        {
            if(diceDOM.style.display === 'none')
            {
                diceDOM.style.display = 'block';
            }
            diceDOM.src = 'dice-'+dice+'.png';

            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            previousScore = dice;
        }
        return isNextPlayerActive;
}
document.querySelector(".btn-roll").addEventListener('click',function(){
    if(isGamePlayed)
    {
        var dice1 = getRandomDice();
        var dice2 = getRandomDice();
        
        roundScore += (dice1 + dice2);
        var dice1Dom = document.querySelector(".dice-1");
        var dice2Dom = document.querySelector(".dice-2");
        var isNextPlayerActive = getRollActions(dice1Dom,dice1,previousScore1,roundScore);
        if(!isNextPlayerActive)
        {
            getRollActions(dice2Dom,dice2,previousScore2,roundScore);
        }
        // if(dice1Dom.style.display === 'none')
        // {
        //     dice1Dom.style.display = 'block';
        // }
        // dice1Dom.src = 'dice-'+dice1+'.png';

        // if(dice1 === 1 ||((dice1 === 6) && (previousScore1 === 6)))
        // {
        //     nextPlayer();
        // }
        // else
        // {
        //     document.querySelector("#current-" + activePlayer).textContent = roundScore;
        //     previousScore1 = dice1;
        // }
    }
});

document.querySelector(".btn-hold").addEventListener('click',function(){
    if(isGamePlayed)
    {
        scores[activePlayer] += roundScore;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] > (winningScore -1))
    {
            var activePlayerDOM = document.querySelector(".player-"+activePlayer+"-panel");
            activePlayerDOM.classList.add('winner');
            activePlayerDOM.classList.remove('active');
            var winnerPlayerDOM =document.querySelector("#name-"+ activePlayer);
            winnerPlayerDOM.textContent = "Winner!";
            winnerPlayerDOM.classList.add("winner");
            var dice1Dom = document.querySelector(".dice-1");
            dice1Dom.style.display = 'none';
            var dice2Dom = document.querySelector(".dice-2");
            dice2Dom.style.display = 'none';
            isGamePlayed = false;
    }
    else{
        nextPlayer();
    }
    }
});

document.querySelector(".btn-new").addEventListener('click',function(){
    
    var inputScoreDOM = document.querySelector(".input-score");
    if(inputScoreDOM.value)
    {
        initialize();
        isGamePlayed = true;
    }
    else{
        alert("Please set the winning score!.");
    }
});
  