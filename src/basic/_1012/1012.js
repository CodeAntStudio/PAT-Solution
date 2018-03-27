var readline = require('readline');

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(input) {
  var arr = input.split(' ')
  arr.splice(0, 1)
  var result = deal(arr)
  console.log(result);
  rl.close();
})

function deal(inputs) {
  var result = []
  var a1 = 0
  var a2 = []
  var a3 = 0
  var a4 = 0
  var a4N = 0
  var a5 = 0
  var x = 0
  var y = 0
  for(var i = 0; i < inputs.length; i++) {
    if (inputs[i] % 10 === 0){
      a1 += +inputs[i]
    }
    if (inputs[i] % 5 === 1) {
      a2.push(+inputs[i])
    }
    if (inputs[i] % 5 === 2) {
      a3 += 1
    }
    if (inputs[i] % 5 === 3) {
      a4 += +inputs[i]
      a4N += 1
    }
    if (inputs[i] % 5 === 4) {
      a5 = Math.max(a5, +inputs[i])
    }
  }
  for(var j = 0; j < a2.length; j++) {
    if (j%2 === 0) {
      x += a2[j]
    } else {
      y += a2[j]
    }
  }
  a1 = (a1===0?'N':a1)
  a2 = ((x===0&&y===0)?'N':x-y)
  a3 = (a3===0?'N':a3)
  a4 = (a4===0?'N':(+(a4 / a4N).toFixed(1)))
  a5 = (a5===0?'N':a5)
  result.push(a1, a2, a3, a4, a5)
  return result.join(' ')
}
