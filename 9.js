const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1; 
const guessedNumbers = []; 
let attempts = 0;

function getUserInput() {
  rl.question('Guess the secret number: ', (userInput) => {
    const guess = parseInt(userInput);

    if (isNaN(guess)) {
      console.log('Please enter a valid number.');
    } else {
      if (!guessedNumbers.includes(guess)) {
        attempts++;
        guessedNumbers.push(guess);
      }

      if (guess < secretNumber) {
        console.log('Too small. Try again.');
      } else if (guess > secretNumber) {
        console.log('Too large. Try again.');
      } else {
        console.log(`Congratulations! You've guessed the secret number (${secretNumber}) in ${attempts} ${attempts === 1 ? 'try' : 'tries'}.`);
        console.log("Thank you for playing.")
        rl.close();
        return;
      }
    }

    getUserInput();
  });
}

getUserInput();


