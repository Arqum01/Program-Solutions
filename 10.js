const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Leap Year : ', (userInput) => {
    let Year = parseInt(userInput)
    let leapyearfound = 0
    for(let year = Year ; leapyearfound <= 20; year++)
        {
           
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) 
                {
                    console.log(year)
                    leapyearfound++
                }
            }
  rl.close();
});