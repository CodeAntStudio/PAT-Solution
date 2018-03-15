/*
题目： A除以B
描述：
本题要求计算A/B，其中A是不超过1000位的正整数，B是1位正整数。你需要输出商数Q和余数R，使得A = B * Q + R成立。

输入格式：

输入在1行中依次给出A和B，中间以1空格分隔。

输出格式：

在1行中依次输出Q和R，中间以1空格分隔。

输入样例：
123456789050987654321 7
输出样例：
17636684150141093474 3
 */

var readline = require('readline')

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function(input) {
  var A = input.split(' ')[0]
  var B = input.split(' ')[1]
  var result = deal(A, B)
  console.log(result);
  rl.close()
})
function deal(A, B) {
  if((+A) < (+B)) {
    return '0 '+A
  }
  if ((+A) === (+B)) {
    return '1 0'
  }
  var quotient = 0;//商数
  var remainder = 0;//余数
  remainder = (+A[0])%(+B)
  quotient = (+A[0]-remainder) / (+B)
  var x = quotient===0?'':(quotient +'')
  for(var i = 1; i < A.length; i++) {
    var temp = remainder*10+ (+A[i])
    remainder = temp % (+B)
    quotient = (temp - (+remainder)) / (+B)
    x += quotient
  }
  return x +' ' + remainder
}
