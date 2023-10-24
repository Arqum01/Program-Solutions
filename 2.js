const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Your Name: ', (userInput) => {
  console.log('Hello' + ' ' + userInput);
  rl.close();
});
