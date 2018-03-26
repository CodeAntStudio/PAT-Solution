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
