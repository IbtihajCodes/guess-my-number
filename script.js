'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

let highscore = 0;
document.querySelector('.check-btn').addEventListener('click', function () {
  console.log('Hi');
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.guess').style.backgroundColor = '#60b347';
    document.querySelector('.question-box').style.width = '300px';
    document.querySelector('.question-box').style.left = '40%';
    document.querySelector('.question-box').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again-btn').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Guess the Number ...';
  document.querySelector('.guess').value = '';
  document.querySelector('.question-box').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').style.backgroundColor = '#222';
  document.querySelector('.question-box').style.width = '150px';
  document.querySelector('.question-box').style.left = '45%';
  document.querySelector('.question-box').style.transform = 'translateY(50%)';
});
