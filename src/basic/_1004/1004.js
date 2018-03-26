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
        var result = deal(arr)
        console.log(result[0]);
        console.log(result[1]);
        rl.close();
    }
});

function deal(inputs) {
  var scoreArr = []
  for (var item of inputs) {
    var arr = item.split(' ')
    scoreArr.push(arr[2])
  }
  var maxIndex = 0
  var minIndex = 0
  var maxScore = scoreArr[0]
  var minScore = scoreArr[0]
  for(var i = 1; i < scoreArr.length; i++) {
    if (+scoreArr[i] > +maxScore) {
      maxIndex = i
      maxScore = scoreArr[i]
    }
    if (+scoreArr[i] < +minScore) {
      minIndex = i
      minScore = scoreArr[i]
    }
  }
  var result = [inputs[maxIndex].split(' ').slice(0,2).join(' '), inputs[minIndex].split(' ').slice(0,2).join(' ')]
  return result
}
