let primeNumber = 0
for( let i=1 ; i<100; i++)
{
  if( i != 1 )
  {
    if(i == 2 || i % 2 != 0)
    {
        if(i == 3 || i % 3 != 0)
        {
            if(i == 5 || i % 5 != 0)
            {
              if(i == 7 || i % 7 != 0){
                // console.log(i)
                primeNumber++
              }
            }
        }
    }
      
  }
}
console.log(primeNumber)