var readline = require('readline');

rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var nCount = +inputArr[0].slice(0, 1); // N
    var nleft = +inputArr[0].slice(2, 3); // M
    if (inputArr.length == 2) {
      var result = deal(nCount, nleft, inputArr[1])
      console.log(result);
      rl.close();
    }

});

function deal(nCount, nleft, str) {
  var arr = str.split(' ')
  var nleftCount = nleft%nCount
  var arr1 = arr.slice(0,nCount - nleftCount)
  var arr2 = arr.slice(nCount - nleftCount)
  var result = arr2.concat(arr1).join(' ')
  return result
}
