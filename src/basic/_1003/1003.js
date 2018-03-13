/*
题目：我要通过
描述：
“答案正确”是自动判题系统给出的最令人欢喜的回复。本题属于PAT的“答案正确”大派送 —— 只要读入的字符串满足下列条件，系统就输出“答案正确”，否则输出“答案错误”。

得到“答案正确”的条件是：

1. 字符串中必须仅有P, A, T这三种字符，不可以包含其它字符；
2. 任意形如 xPATx 的字符串都可以获得“答案正确”，其中 x 或者是空字符串，或者是仅由字母 A 组成的字符串；
3. 如果 aPbTc 是正确的，那么 aPbATca 也是正确的，其中 a, b, c 均或者是空字符串，或者是仅由字母 A 组成的字符串。

现在就请你为PAT写一个自动裁判程序，判定哪些字符串是可以获得“答案正确”的。
输入格式： 每个测试输入包含1个测试用例。第1行给出一个自然数n (<10)，是需要检测的字符串个数。接下来每个字符串占一行，字符串长度不超过100，且不包含空格。

输出格式：每个字符串的检测结果占一行，如果该字符串可以获得“答案正确”，则输出YES，否则输出NO。

输入样例：
8
PAT
PAAT
AAPATAA
AAPAATAAAA
xPATx
PT
Whatever
APAAATAA
输出样例：
YES
YES
YES
YES
NO
NO
NO
NO
 */

/*
function isPAT(s){
  if(s.matches('A*PATA*')){
    var indexOfPAT = s.indexOf('PAT');
    return indexOfPAT*2+3===s.length;
  }else if(s.matches('A*PA+TA*')){

  }
}
aPbTc
aPbATca

AAPAATAAAA
a = AA
b = A
c = AA

AAPATAA

APAAATAA
APAATA
APAT
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
        for(var item of arr) {
          var result = deal(item)
          console.log(result);
        }
        rl.close();
    }
});

function deal(inputs) {
  if (!(/^A*PA+TA*$/.test(inputs))) {
    return 'NO'
  } else {
    if (/PAT/.test(inputs)) {
      var y = inputs.split('PAT')
      if (y[0] == y[1]) {
        return 'YES'
      } else {
        return 'NO'
      }
    } else {
      var a = inputs.split('P')[0]
      var b = inputs.split('P')[1].split('AT')[0]
      var c = inputs.split('P')[1].split('AT')[1] !== '' ? (repeatStr('A', (inputs.split('P')[1].split('AT')[1]).length - a.length)):''
      return deal(a + 'P' + b + 'T' + c)
    }
  }
}
function repeatStr (str, n) {
  return new Array(n + 1).join(str)
}
