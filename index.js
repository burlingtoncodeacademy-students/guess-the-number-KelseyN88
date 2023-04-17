const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
// random number generator function
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }


start();


async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);

  //variables
  let computerGuess = 0
  let minNumber = 0
  let maxNumber = 100
  let maxTry = 7
  let guessCount = 0

  while (guessCount < maxTry) {
    computerGuess = randomNumber(minNumber, maxNumber)
    let midNumber = Math.floor((minNumber + maxNumber) / 2)
    
     if (secretNumber < midNumber) {
        console.log(`Too bad, so sad. Guess lower`)
        maxNumber = midNumber--
        computerGuess = Math.floor((maxNumber + minNumber) / 2) 
        let questionText = await ask(`Is your number ${computerGuess}?`)
        guessCount = guessCount + 1

    } else if (secretNumber > midNumber) {
      console.log(`close only counts in horseshoes, guess higher!`)
      minNumber = midNumber ++
      computerGuess = Math.floor((maxNumber + minNumber) / 2) 
      let questionText = await ask(`Is your number ${computerGuess}?`)
      guessCount = guessCount + 1

    } else {
        console.log(`${secretNumber} is correct! Now, get outta here.`)
        process.exit();
    }

  }

    console.log(`Yikes... try again when you've had some practice, kid.`)
    process.exit
}
