var readline = require('readline')

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
var inputArr = []
rl.on('line', function(input) {
  inputArr.push(input)
  var str1 = inputArr[0]
  var str2 = inputArr[1]
  var str3 = inputArr[2]
  var str4 = inputArr[3]
  if (inputArr.length === 4) {
    var reslut = deal(str1,str2,str3,str4)
    console.log(reslut);
    rl.close()
  }
})
function deal(str1,str2,str3,str4) {
  var week = ''
  var hours = ''
  var minute = ''
  for(var i = 0 ; i < Math.min(str1.length,str2.length); i++) {
    if (str1.charAt(i) === str2.charAt(i) && /[A-G]/.test(str1.charAt(i))) {
      week = str1.charAt(i)
      var j = i
      break
    }
  }
  for(var i = j+1 ; i < Math.min(str1.length,str2.length); i++) {
    if (str1.charAt(i) === str2.charAt(i) && /[A-N0-9]/.test(str1.charAt(i))) {
      hours = str1.charAt(i)
      break
    }
  }
  for(var i = 0 ; i < Math.min(str3.length,str4.length); i++) {
    if (str3.charAt(i) === str4.charAt(i) && /[a-zA-Z]/.test(str3.charAt(i))) {
      minute = i
      break
    }
  }
  var weekArr1 = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  week = weekArr1[(parseInt((week+''), 17) + '').split('')[1]]
  hours = (parseInt(hours, 24) < 10 ?('0' + parseInt(hours, 24)):parseInt(hours, 24))
  minute = (minute < 10 ?('0' + minute):minute)
  return week+ ' '+hours + ':'+minute
}
