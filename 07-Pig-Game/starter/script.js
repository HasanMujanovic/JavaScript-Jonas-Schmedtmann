'use strict';

// Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  diceEl.classList.add('hidden');

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
};
init();
const swtichPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const removeWinner = function () {
  document;
};
// Rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Gennerating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Chech for rolled 1, if true swtich to new player
    if (dice !== 1) {
      // Add the dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; //CHANGE LATER
    } else {
      // Swtich to the next player
      swtichPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to the active player
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check if score is === 10
    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // Switch to the next player
      swtichPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

// Moj nacin / pre init funckije
// btnNew.addEventListener('click', function () {
//   player1.classList.remove('player--active');

//   player0.classList.add('player--active');

//   player0.classList.remove('player--winner');
//   player1.classList.remove('player--winner');
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   diceEl.classList.add('hidden');
//   currentScore = 0;
//   activePlayer = 0;
//   scores = [0, 0];
//   playing = true;
// });
