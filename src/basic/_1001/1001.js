var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(data) {
    // 获取输入
    var inputs = data.trim();

    // 处理
    var result = deal(inputs, 0);

    // 输出结果
    console.log(result);
    rl.close();
});

function deal(inputs, num) {
  if (inputs == 1) {
    return num
  }
  if (inputs % 2 == 0) {
    return deal(inputs/2, num + 1)
  } else {
    return deal((3*inputs + 1)/2, num + 1)
  }
}
