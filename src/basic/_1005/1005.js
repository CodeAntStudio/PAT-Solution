var readline = require('readline')

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var inputArr = []
rl.on('line', function (input) {
  inputArr.push(input)
  var nNum = +inputArr[0]
  var y = []
  if (inputArr.length === 2) {
    var arr = inputArr[1].split(' ')
    var x = []
    for (var i = 0; i < arr.length; i++) {
      var x = deal(arr[i], [])
      y = y.concat(x)
    }
    y = distinct(y)
    var z = []
    for (var i = 0; i < arr.length; i++) {
      if(y.indexOf(+arr[i]) === -1) {
        z.push(+arr[i])
      }
    }
    for (var i = 0; i < z.length; i++) {
      for (var j = 0; j < z.length - i - 1; j++) {
        if (z[j] < z[j + 1]) {
          var result
          result = z[j]
          z[j] = z[j+1]
          z[j+1] = result
        }
      }
    }
    console.log(z.join(' '))
    rl.close();
  }
})

function deal(input, arr) {
  if (input === 1) {
    return arr
  }
  if (input % 2 === 0) {
    arr.push(input/2)
    return deal(input/2, arr)
  } else {
    arr.push((3*input + 1)/2)
    return deal((3*input + 1)/2, arr)
  }
}
function distinct(arr) {
  var arr1 = []
  for (var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        j = ++i
      }
    }
    arr1.push(arr[i])
  }
  return arr1
}
