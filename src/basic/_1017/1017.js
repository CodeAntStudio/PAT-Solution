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
