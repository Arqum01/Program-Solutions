let sum = 0 
for(k=1;k<=100000;k++)
{
    let a = Math.pow(-1, k + 1); 
    let b=(2*k-1)
    let result = 4 * (a/b)
    sum = sum + result
}
console.log(sum)