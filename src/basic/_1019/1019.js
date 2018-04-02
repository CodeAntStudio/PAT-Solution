var readline = require('readline')

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.on('line', function(input) {
    var result = deal(input)
    for (var i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
    rl.close()
})

function deal(input) {
  var arr = []
  var x = '', y = ''
  var result = input
  while(1) {
    if (result.toString().length < 4) {
      result = result.toString() + repeat('0',(4-result.toString().length))
    }
    x = result.toString().split('').sort().join('')
    y = result.toString().split('').sort().reverse().join('')
    result = Number(y) - Number(x)
    if (result === 0) {
      arr.push(y + ' - ' + x + ' = 0000')
      break
    }
    if (result === 6174) {
      arr.push(y + ' - ' + x + ' = 6174')
      break
    }
    if (result.toString().length < 4) {
      result = repeat('0',(4-result.toString().length)) + result.toString()
    }
    arr.push(y + ' - ' + x + ' = ' + result)
  }
  return arr
}
function repeat(str, n){
  return new Array(n+1).join(str);
}
