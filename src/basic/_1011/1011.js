var readline = require('readline');

rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var nline = +inputArr[0]
    var arr = inputArr.slice(1);
    if (inputArr.length === nline + 1) {
      for(var i = 0; i < nline; i++) {
        console.log('Case #' + (i+1) + ': '+ deal(arr[i].trim().split(' ')));
      }
      rl.close();
    }

});

function deal(arr) {
  if (+arr[0] + +arr[1] > +arr[2]) {
    return true
  } else {
    return false
  }
}
