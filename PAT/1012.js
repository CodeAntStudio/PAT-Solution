/*
题目：数字分类
描述：
给定一系列正整数，请按要求对数字进行分类，并输出以下5个数字：

A1 = 能被5整除的数字中所有偶数的和；
A2 = 将被5除后余1的数字按给出顺序进行交错求和，即计算n1-n2+n3-n4...；
A3 = 被5除后余2的数字的个数；
A4 = 被5除后余3的数字的平均数，精确到小数点后1位；
A5 = 被5除后余4的数字中最大数字。
输入格式：

每个输入包含1个测试用例。每个测试用例先给出一个不超过1000的正整数N，随后给出N个不超过1000的待分类的正整数。数字间以空格分隔。

输出格式：

对给定的N个正整数，按题目要求计算A1~A5并在一行中顺序输出。数字间以空格分隔，但行末不得有多余空格。

若其中某一类数字不存在，则在相应位置输出“N”。
输入样例1：
13 1 2 3 4 5 6 7 8 9 10 20 16 18
输出样例1：
30 11 2 9.7 9
输入样例2：
8 1 2 4 5 6 7 9 16
输出样例2：
N 11 2 N 9
 */
var readline = require('readline');

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(input) {
  var arr = input.split(' ')
  arr.splice(0, 1)
  var result = deal(arr)
  console.log(result);
  rl.close();
})

function deal(inputs) {
  var result = []
  var a1 = 0
  var a2 = []
  var a3 = 0
  var a4 = 0
  var a4N = 0
  var a5 = 0
  var x = 0
  var y = 0
  for(var i = 0; i < inputs.length; i++) {
    if (inputs[i] % 10 === 0){
      a1 += +inputs[i]
    }
    if (inputs[i] % 5 === 1) {
      a2.push(+inputs[i])
    }
    if (inputs[i] % 5 === 2) {
      a3 += 1
    }
    if (inputs[i] % 5 === 3) {
      a4 += +inputs[i]
      a4N += 1
    }
    if (inputs[i] % 5 === 4) {
      a5 = Math.max(a5, +inputs[i])
    }
  }
  for(var j = 0; j < a2.length; j++) {
    if (j%2 === 0) {
      x += a2[j]
    } else {
      y += a2[j]
    }
  }
  a1 = (a1===0?'N':a1)
  a2 = ((x===0&&y===0)?'N':x-y)
  a3 = (a3===0?'N':a3)
  a4 = (a4===0?'N':(+(a4 / a4N).toFixed(1)))
  a5 = (a5===0?'N':a5)
  result.push(a1, a2, a3, a4, a5)
  return result.join(' ')
}
