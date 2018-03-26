var readline = require('readline');

rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
  var result = deal(input)
  console.log(result);
  rl.close();
});

function deal(input) {
  var num = 0
  var numarr = []
  for (var i = 1; i <= input; i++) {
    if (isPrime(i)) {
      numarr.push(i)
    }
  }
  for (var i = 1; i < numarr.length; i++) {
    if (numarr[i] - numarr[i - 1] === 2) {
      num += 1
    }
  }
  var result = num
  return result
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
