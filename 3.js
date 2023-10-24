const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Your Name: ', (userInput) => {
    if(userInput == 'Bob' || userInput == 'Alice'){
  console.log('Hello' + ' ' + userInput);
  rl.close();
}else {
    console.log("Enter Valid Name")
    rl.close();
}
});
