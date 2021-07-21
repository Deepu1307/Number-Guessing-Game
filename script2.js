'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

// REFACTORING MESSAGE
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// Implementing Check Button Functionality.

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // NO INPUT 
    if (!guess) {
        // document.querySelector('.message').textContent = '🛑 No Number!';
        displayMessage('🛑 No Number!');
    } 
    // When Correct Number
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🥳 Correct Number!';
        displayMessage('🥳 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    // REFACTORING OUR CODE : DRY PRINCIPLE
    // WHEN GUESS IS NOT EQUAL TO SECRETNUMBER..

    else if (guess !== secretNumber) {
        if (score > 1){
            // Using Ternary Operator
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!'  : '📉 Too Low!';
            displayMessage(guess > secretNumber ? '📈 Too High!'  : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }


    // when guess high
    // else if (guess > secretNumber) {
    //     if (score > 1){
    //         document.querySelector('.message').textContent = '📈 Too High!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }

    // // When guess low
    // else if (guess < secretNumber) {
    //     if (score > 1){
    //         document.querySelector('.message').textContent = '📉 Too Low!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } 
});

// Implementing Again Button Functionality.

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.message').textContent = '🔰 Start guessing...';
    displayMessage('🔰 Start guessing...');
    document.querySelector('.number').textContent = '?';
});