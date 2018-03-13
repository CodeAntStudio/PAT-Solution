/*
题目：数素数
描述：
令Pi表示第i个素数。现任给两个正整数M <= N <= 104，请输出PM到PN的所有素数。

输入格式：

输入在一行中给出M和N，其间以空格分隔。

输出格式：

输出从PM到PN的所有素数，每10个数字占1行，其间以空格分隔，但行末不得有多余空格。

输入样例：
5 27
输出样例：
11 13 17 19 23 29 31 37 41 43
47 53 59 61 67 71 73 79 83 89
97 101 103
 */

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
