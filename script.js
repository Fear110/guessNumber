'use strict';
let random = Math.trunc(Math.random() * 20 + 1);
let scorenum = 20;
let higestsco = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (scorenum == 0) {
    //document.querySelector('.message').textContent = 'โ you lost game';
    displayMessage('โ you lost game');
  } else {
    document.querySelector('.score').textContent = scorenum - 1;
    if (!guess) {
      // document.querySelector('.message').textContent = 'โ Input is empty';
      displayMessage('โ Input is empty');
    } else if (guess > random) {
      //document.querySelector('.message').textContent = 'Guess is too high';
      displayMessage('Guess is too high');
      scorenum--;
    } else if (guess < random) {
      // document.querySelector('.message').textContent = 'Guessed is too low';
      displayMessage('Guessed is too low');
      scorenum--;
    } else {
      if (guess === random) {
        //document.querySelector('.message').textContent = '๐answer is correct';

        document.querySelector('.number').textContent = guess;
        document.querySelector('.score').textContent = scorenum;
        document.querySelector('body').style.backgroundColor = '#1affeb';
        displayMessage('You Guessed the correct Number๐๐');
        if ((scorenum) => higestsco) {
          document.querySelector('.highscore').textContent = scorenum;
          higestsco = scorenum;
        }
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  scorenum = 20;
  random = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = '20';
  console.log(random);
  //document.querySelector('.number').textContent = '?';
  displayMessage('?');
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#131414';
  document.querySelector('.guess').textContent = '';
});
