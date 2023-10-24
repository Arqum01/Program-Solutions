const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Number: ', (userInput) => {
    let sum = parseInt(userInput);
    for(let i=0 ; i<userInput ; i++)
    {
        sum= sum+i
    }
    console.log(sum)
    rl.close();
});
