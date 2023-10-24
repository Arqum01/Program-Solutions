const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number: ', (number) => {
    var num = parseFloat(number);

    rl.question('Enter 1 for Add 2 for Product: ', (method) => {
        const num2 = parseFloat(method);
        if( num2 == 1){
            var sum = 0
            for(let i=num ; i>0 ; i--)
                {
                    
                    sum = sum + i
                   
                }
             console.log(sum)
        }else if( num2 == 2){
            var product = 1
            for(let i=num ; i>0 ; i--)
                {
                    
                    product = product * i
                   
                }
             console.log(product)
        }else{
            console.log("Enter Valid Number")
        }
    rl.close(); 

    });
});
