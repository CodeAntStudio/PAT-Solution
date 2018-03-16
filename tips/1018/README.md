# [1018. 锤子剪刀布 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  100 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

大家应该都会玩“锤子剪刀布”的游戏：两人同时给出手势，胜负规则如图所示：<br/>

![7r_muvaqb4myb9](https://user-images.githubusercontent.com/17797768/37511733-e11962be-293a-11e8-8c29-2d11f5fd91dc.jpg)
<br>
现给出两人的交锋记录，请统计双方的胜、平、负次数，并且给出双方分别出什么手势的胜算最大。
**输入格式**：  
输入第1行给出正整数N（<=10<sup>5</sup>），即双方交锋的次数。随后N行，每行给出一次交锋的信息，即甲、乙双方同时给出的的手势。C代表“锤子”、J代表“剪刀”、B代表“布”，第1个字母代表甲方，第2个代表乙方，中间有1个空格。

**输出格式**：  
输出第1、2行分别给出甲、乙的胜、平、负次数，数字间以1个空格分隔。第3行给出两个字母，分别代表甲、乙获胜次数最多的手势，中间有1个空格。如果解不唯一，则输出按字母序最小的解。

**输入样例**：
> 10
> C J
> J B
> C B
> B B
> B C
> C C
> C B
> J B
> B C
> J J

**输出样例**：
> 5 3 2
> 2 3 5
> B B

## 思路
无特殊技巧。题目本身没有难度。时间限制比较严格，JavaScript很容易超时。


- **JavaScript**(超时)。



### JavaScript
```javascript
var readline = require('readline')

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
var inputArr = []
rl.on('line', function(input) {
  inputArr.push(input)
  var N = +inputArr[0]
  if (inputArr.length === (N+1)) {
    var result = deal(inputArr.slice(1))
    for (var i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
    rl.close()
  }
})

function deal(input) {
  var AWin = 0 //A赢的次数
  var ADraw = 0 // 平局次数
  var ALose = 0 // 输的次数
  var CAN = 0 //A通过C赢的次数
  var JAN = 0 //A通过J赢的次数
  var BAN = 0 //A通过B赢的次数
  var CBN = 0 //B通过C赢的次数
  var JBN = 0 //B通过J赢的次数
  var BBN = 0 //B通过B赢的次数
  var MaxA = '' //A赢的次数最多的手势
  var MaxB = '' //B赢的次数最多的手势
  var result = []
  for(var i = 0; i < input.length; i++) {
    var A = input[i].split(' ')[0]
    var B = input[i].split(' ')[1]
    if ((A === 'C' &&B==='J') ||(A === 'J' &&B==='B')||(A === 'B' &&B==='C')) {
      AWin++
      if ( A === 'C') {
        CAN++
      }
      if (A === 'J') {
        JAN++
      }
    } else if (A===B) {
      ADraw++
    }
    if ((B === 'C' && A==='J') ||(B === 'J' && A==='B')||(B === 'B' && A==='C')) {
      if ( B === 'C') {
        CBN++
      }
      if (B === 'J') {
        JBN++
      }
    }
  }
  ALose = input.length - AWin - ADraw
  BAN = AWin - CAN - JAN
  BBN = ALose - CBN - JBN
  if(BAN >= CAN && BAN>= JAN) {
    MaxA = 'B'
  } else if(CAN >= JAN && CAN > BAN) {
    MaxA = 'C'
  } else if (JAN > BAN && JAN > CAN) {
    MaxA = 'J'
  }
  if(BBN >= CBN && BBN>= JBN) {
    MaxB = 'B'
  } else if(CBN >= JBN && CBN > BBN) {
    MaxB = 'C'
  } else if (JBN > BBN && JBN > CBN) {
    MaxB = 'J'
  }
  result.push(AWin + ' ' + ADraw +' '+ ALose, ALose + ' ' + ADraw + ' ' + AWin, MaxA + ' '+ MaxB )
  return result
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1017
