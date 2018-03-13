/*
题目：换个格式输出整数
描述：
让我们用字母B来表示“百”、字母S表示“十”，用“12...n”来表示个位数字n（<10），换个格式来输出任一个不超过3位的正整数。例如234应该被输出为BBSSS1234，因为它有2个“百”、3个“十”、以及个位的4。

输入格式：每个测试输入包含1个测试用例，给出正整数n（<1000）。

输出格式：每个测试用例的输出占一行，用规定的格式输出n。

输入样例1：
234
输出样例1：
BBSSS1234
输入样例2：
23
输出样例2：
SS123
 */
var readline = require('readline');

rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
rl.on('line', function (data) {
  // 获取输入
  var inputs = data.trim();

  // 处理
  var result = deal(inputs);

  // 输出结果
  console.log(result);
  rl.close();
});

function deal(inputs) {
  var numArr = inputs.split('').reverse()
  var strArr = ['', 'S', 'B']
  var result = ''
  for (var i = 0; i < numArr.length; i++) {
    result += repeat(strArr[i], +numArr[i])
  }
  var result = result.split('').reverse().join('')
  for (var i = 1; i <= numArr[0]; i++) {
    result += ''+i
  }
  return result
}

function repeat(str , n){
  return new Array(n+1).join(str);
}
