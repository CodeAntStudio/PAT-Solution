var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(data) {
    // 获取输入
    var inputs = data.trim();

    // 处理
    var result = deal(inputs);

    // 输出结果
    console.log(result);
    rl.close();
});

function deal(inputs) {
  var arr = inputs.split('')
  var sum = 0
  for(var item of arr) {
    sum += +item
  }
  var sumArr = (sum + '').split('')
  var arr = ['ling','yi', 'er', 'san', 'si', 'wu', 'liu', 'qi', 'ba', 'jiu']
  var str = ''
  for(var item of sumArr) {
    str += arr[item] + ' '
  };
  return str.trim()
}
