'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 5;
console.log(document.querySelector('.guess').value);

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = Number(document.querySelector('.highscore').textContent);
let score2 = 20;
let score = Number(document.querySelector('.score').textContent);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  // DIDNT INPUT NUMBER
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No Number!');
  } else if (guess > 20 || guess <= 0) {
    // document.querySelector('.message').textContent =
    //   'Uneli ste broj koji nije u opsegu';
    displayMessage('Uneli ste broj koji nije u opsegu');
    // CORRECT NUMBER
  } else if (guess === secretNumber) {
    if (score2 > highScore) {
      highScore = score2;
      document.querySelector('.highscore').textContent = highScore;
    }
    // document.querySelector('.message').textContent = 'Correct number!';
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score2 > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Secret number is lower'
          : 'secret number is higher'
      );
      score2--;
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? 'Secret number is lower'
      //     : 'secret number is higher';
      // score2--;
      document.querySelector('.score').textContent = score2;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // GUESS TOO HIGH
  }
  //  else if (guess > secretNumber) {
  //   if (score2 > 1) {
  //     document.querySelector('.message').textContent = 'Secret number is lower';
  //     score2--;
  //     document.querySelector('.score').textContent = score2;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // WHEN GUESS IS TOO LOW
  // } else if (guess < secretNumber) {
  //   if (score2 > 1) {
  //     document.querySelector('.message').textContent =
  //       'secret number is higher';
  //     score2--;
  //     document.querySelector('.score').textContent = score2;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // if (guess !== secretNumber) {
  //   score = score - 1;
  //   document.querySelector('.score').textContent = score;
  // }
  console.log(highScore);
});
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
const input1 = document.querySelector('.guess').textContent;
const message1 = document.querySelector('.message').textContent;
const numberHidden = document.querySelector('.number').textContent;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = input1;
  document.querySelector('.message').textContent = message1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = numberHidden;
  score2 = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
