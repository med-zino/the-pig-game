/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundscore, acivePlayer ,gamePlay;

init () ;
document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlay) {
// 1 . random number
var dice = Math.floor(Math.random()*6)+1;
  
//2 . display the resault
var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-' + dice + '.png';

// 3. update the score
if (dice !== 1 ) {
roundscore +=dice ;
document.querySelector('#current-' + activePlayer ).textContent = roundscore ;
 } else {
 
   nextPlayer() ;
   diceDOM.src = 'dice-1.png';
   diceDOM.style.display = "block"
}

  }

});

document.querySelector('.btn-hold').addEventListener('click',function () {
  if (gamePlay) {
    //add current score to global score 
score[activePlayer] += roundscore;


//update user interface
document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

//check if player won the game
if (score[activePlayer] >= 100) {
   document.querySelector('#name-' + activePlayer).textContent = 'winner!' ;
   document.querySelector('.dice').style.display = 'none' ;
   document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
   document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  gamePlay = false
  } else {

//next player
nextPlayer();
}

  }
});

function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
  roundscore = 0;
  
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0'; 
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  
  document.querySelector('.dice').style.display = 'none' ; 
  
}

document.querySelector('.btn-new').addEventListener('click',init );
function init() {
  gamePlay = true
  score = [0,0];
  activePlayer = 0;
  roundscore = 0;
  document.querySelector('.dice').style.display = 'none' ;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('#name-0').textContent = 'player1' ;
document.querySelector('#name-1').textContent = 'player2' ;
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
} 
//document.querySelector('#current-' + activePlayer ).textContent = dice ;
// document.querySelector('#current-' + activePlayer ).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent ; 