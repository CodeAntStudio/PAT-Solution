var readline = require('readline');

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function(input) {
  var M = +input.split(' ')[0]
  var N = +input.split(' ')[1]
  var result = deal(M, N)
  for(var i = 10; i < result.length + 10; i+=10) {
    console.log(result.slice(i - 10,i).join(' '));
  }
  rl.close()
})
function deal(M, N) {
  var prime = []
  for (var i = 1; i ; i++) {
    if(isPrime(i)) {
      prime.push(i)
    }
    if(prime.length === N) {
      break
    }
  }
  return prime.slice(M - 1)
}
//判断素数
function isPrime(n) {
  if (n < 2) {
    return false
  }
  if (n === 2) {
    return true
  } else if(n%2 === 0){
    return false
  }
  var squareRoot=Math.sqrt(n);
   for(var i=3;i<=squareRoot;i+=2) {
     if (n%i===0) {
       return false;
     };
  }
  return true;
}
