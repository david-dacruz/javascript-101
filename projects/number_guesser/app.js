// game values
let min = 1,
    max = 10,
    winningNUm = getRandomNum(max, min),
    guessesLeft = 3;

// UI vars
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // validate input
  if( isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // check if won
  if(guess === winningNUm){
    // disable input
    // guessInput.disabled = true;
    // // change border color
    // guessInput.style.borderColor = 'green';
    // // set message
    // setMessage(`${winningNUm} is correct, you win !`, 'green');
    gameOver(true, `${winningNUm} is correct, you win !`)
  } else {
    // wrong number 
    guessesLeft -= 1;
    if(guessesLeft === 0){
      // game over - lost
      // guessInput.disabled = true;
      // // change border color
      // guessInput.style.borderColor = 'red';
      // // set message
      // setMessage(`Game over you lost, the correct number is ${winningNUm}`, 'red');
      gameOver(true, `Game over you lost, the correct number is ${winningNUm}`)
    } else {
      // game continue worng answer
      // clear input
      guessInput.value = '';
      guessInput.style.borderColor = 'red';

      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

    }
  }
});

// game over 
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : 'red';

  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;
  message.style.color = color;

  // set message
  setMessage(msg);

  // play again
  guessBtn.value = 'Play again';
  guessBtn.className += 'play-again';
}

// get random num
function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// set message
function setMessage(msg, color){
  message.textContent = msg;
  message.style.color = color;
}