'use strict';

// Selecting elements
const player0El = document.getElementById('player-01');
const player01El = document.getElementById('player-02');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


 const diceEl =document.querySelector('.dice')
 const btnNew = document.querySelector('.btn--new');
 const btnRoll = document.querySelector('.btn--roll');
 const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;


    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player01El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player01El.classList.remove('player--active');
}
init();  

const switchPlayer = function () {
    document.getElementById(`score--${activePlayer}`).textContent = currentScore;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;   
    player0El.classList.toggle('player--active');
    player01El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function() {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice.png}`;
    if (dice !== 1) {
        currentScore = currentScore + dice;
        document.getElementById(`score--${activePlayer}`).textContent = currentScore; 
    } else {
        switchPlayer ();
    }
}
 
});

btnHold.addEventListener('click', function() {
    if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >=  100) {
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    } else {
        switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init); 

