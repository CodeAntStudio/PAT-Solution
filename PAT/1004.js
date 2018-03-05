/*
题目：成绩排名
描述：
读入n名学生的姓名、学号、成绩，分别输出成绩最高和成绩最低学生的姓名和学号。

输入格式：每个测试输入包含1个测试用例，格式为

  第1行：正整数n
  第2行：第1个学生的姓名 学号 成绩
  第3行：第2个学生的姓名 学号 成绩
  ... ... ...
  第n+1行：第n个学生的姓名 学号 成绩
其中姓名和学号均为不超过10个字符的字符串，成绩为0到100之间的一个整数，这里保证在一组测试用例中没有两个学生的成绩是相同的。
输出格式：对每个测试用例输出2行，第1行是成绩最高学生的姓名和学号，第2行是成绩最低学生的姓名和学号，字符串间有1空格。

输入样例：
3
Joe Math990112 89
Mike CS991301 100
Mary EE990830 95
输出样例：
Mike CS991301
Joe Math990112
 */
var readline = require('readline');

rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var nLine = +inputArr[0];
    if (inputArr.length == (nLine + 1)) {
        var arr = inputArr.slice(1);
        var result = deal(arr)
        console.log(result[0]);
        console.log(result[1]);
        rl.close();
    }
});

function deal(inputs) {
  var scoreArr = []
  for (var item of inputs) {
    var arr = item.split(' ')
    scoreArr.push(arr[2])
  }
  var maxIndex = 0
  var minIndex = 0
  var maxScore = scoreArr[0]
  var minScore = scoreArr[0]
  for(var i = 1; i < scoreArr.length; i++) {
    if (+scoreArr[i] > +maxScore) {
      maxIndex = i
      maxScore = scoreArr[i]
    }
    if (+scoreArr[i] < +minScore) {
      minIndex = i
      minScore = scoreArr[i]
    }
  }
  var result = [inputs[maxIndex].split(' ').slice(0,2).join(' '), inputs[minIndex].split(' ').slice(0,2).join(' ')]
  return result
}
