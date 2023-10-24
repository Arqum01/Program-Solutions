const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Number: ', (userInput) => {
    let sum = parseInt(userInput);
    for(let i=1 ; i<userInput ; i++)
    {
        if( i % 3 == 0 || i % 5 == 0 ){
        sum = sum + i
        // console.log( sum + i )
        }
    }
    sum = sum - userInput
    console.log(sum)
    rl.close();
});
