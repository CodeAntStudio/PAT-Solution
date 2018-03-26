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
