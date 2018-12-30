/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var currentPlayer, score, roundScore, gamePlaying;
restart();

document.querySelector('.btn-roll').addEventListener('click', function (){
    // if(gamePlaying){
    //change the dice randomly
var dice = Math.floor(Math.random() * 6) + 1;
    
//display the dice
var diceImage = document.querySelector('.dice');
diceImage.style.display = 'block';
diceImage.src = 'dice-' + dice + '.png';
nextPlayer;
if(dice !== 1){
  
 roundScore += dice ;
       document.querySelector('#current-'+ currentPlayer).textContent = roundScore;

   }else{
    
nextPlayer();
   }

    // }
});

document.querySelector('.btn-hold').addEventListener('click', function (){
    // if(gamePlaying){
          //hold-add current score to global score
    score[currentPlayer] += roundScore

    //update the UI
    document.querySelector('#score-' + currentPlayer).textContent = score[currentPlayer];

    //check play win game
    if(score[currentPlayer] >= 10){
        document.querySelector('#name-' +currentPlayer).textContent = 'winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
        // gamePlaying = false;
        // document.querySelector('.btn-new').textContent = 'GameOver';
    }else {
        nextPlayer();
    }
        
    // }
  

});

function nextPlayer (){
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
       if(currentPlayer === 0){
            currentPlayer = 1;
       }else{
           currentPlayer =0;
       }

}

function restart(){
    currentPlayer = 0;
    score = [0,0];
    roundScore = 0;
    //clear the results and set it to zero
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

//hide the dice at the start of Game
document.querySelector('.dice').style.display = 'none';
document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}

document.querySelector('.btn-new').addEventListener('click', restart);