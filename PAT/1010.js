/*
题目：一元多项式求导
描述：
设计函数求一元多项式的导数。（注：xn（n为整数）的一阶导数为n*xn-1。）

输入格式：以指数递降方式输入多项式非零项系数和指数（绝对值均为不超过1000的整数）。数字间以空格分隔。

输出格式：以与输入相同的格式输出导数多项式非零项的系数和指数。数字间以空格分隔，但结尾不能有多余空格。注意“零多项式”的指数和系数都是0，但是表示为“0 0”。

输入样例：
3 4 -5 2 6 1 -2 0
输出样例：
12 3 -10 1 6 0
 */
var readline = require('readline');

rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
rl.on('line', function (input) {
  var result = deal(input)
  console.log(result);
  rl.close();
});

function deal(str) {
  var arr = str.trim().split(' ')
  var arr1 = []
  if (arr.length === 2 && +arr[1] === 0) {
    arr1.push(0,0)
  } else {
    for (var i = 1; i <= arr.length; i += 2) {
      if (+arr[i] === 0) {
        continue
      }
      arr1.push(arr[i]*arr[i - 1])
      arr1.push(arr[i] - 1)
    }
  }
  return arr1.join(' ')
}
