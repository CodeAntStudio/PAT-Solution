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
  var result = str.split(' ').reverse().join(' ')
  return result
}
