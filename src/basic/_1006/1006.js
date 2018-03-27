var readline = require('readline');

rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
rl.on('line', function (data) {
  // 获取输入
  var inputs = data.trim();

  // 处理
  var result = deal(inputs);

  // 输出结果
  console.log(result);
  rl.close();
});

function deal(inputs) {
  var numArr = inputs.split('').reverse()
  var strArr = ['', 'S', 'B']
  var result = ''
  for (var i = 0; i < numArr.length; i++) {
    result += repeat(strArr[i], +numArr[i])
  }
  var result = result.split('').reverse().join('')
  for (var i = 1; i <= numArr[0]; i++) {
    result += ''+i
  }
  return result
}

function repeat(str , n){
  return new Array(n+1).join(str);
}
