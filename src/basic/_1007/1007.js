/*
题目：素数对猜想
描述：
让我们定义 dn 为：dn = pn+1 - pn，其中 pi 是第i个素数。显然有 d1=1 且对于n>1有 dn 是偶数。“素数对猜想”认为“存在无穷多对相邻且差为2的素数”。

现给定任意正整数N (< 105)，请计算不超过N的满足猜想的素数对的个数。

输入格式：每个测试输入包含1个测试用例，给出正整数N。

输出格式：每个测试用例的输出占一行，不超过N的满足猜想的素数对的个数。

输入样例：
20
输出样例：
4
 */
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
