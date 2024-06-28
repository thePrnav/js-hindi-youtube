// console.log(parseInt(Math.random()*100) + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.lowOrHi');
let randomNumber = parseInt(Math.random()*100) + 1

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }else if(guess <= 1){
    alert('please enter a number more than 1')
  }
  else if(guess >= 100){
    alert('please enter a number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage('You guess it right')
    endGame()
  }else if(guess < randomNumber){
    displayMessage('Number is Tooo low')
  }
  else if(guess > randomNumber){
    displayMessage('Number is Tooo high')
  }
}
function displayGuess(guess){
  userInput.value = ''     // clean value
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(guess){
  userInput.value = ''
  userInput.setAttribute('disable', '')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame"<h2>Start New Game</h2>'
  startOver.appendChild(p)
  playGame = false
  newGame()
}
function newGame(guess){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100) + 1
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })

}