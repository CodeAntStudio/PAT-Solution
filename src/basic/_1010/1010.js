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
    for (var i = 0; i < arr.length; i += 2) {
      if (+arr[i+1] === 0) {
        continue
      }
      arr1.push(arr[i]*arr[i + 1])
      arr1.push(arr[i + 1] - 1)
    }
  }
  return arr1.join(' ')
}
