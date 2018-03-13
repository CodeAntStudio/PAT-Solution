// 52~54ms

var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var arr = input.split(' ').slice(1);
    console.log(deal(arr))
    rl.close();
});

function deal(inputs) {
    var A1 = 0
    var A2 = 0, A2Count = 0
    var A3 = 0
    var A4 = 0, A4Count = 0;
    var A5 = 0
    for (var i in inputs) {
        var n = +inputs[i]
        A1 += n % 10 === 0 ? n : 0;
        A2Count += n % 5 === 1 ? 1 : 0;
        A2 += n % 5 === 1 ? (A2Count % 2 === 1 ? 1 : -1) * n : 0;
        A3 += n % 5 === 2 ? 1 : 0;
        A4Count += n % 5 === 3 ? 1 : 0;
        A4 += n % 5 === 3 ? n : 0;
        A5 = n % 5 === 4 && n > A5 ? n : A5;
    }
    return ((A1 === 0 ? "N" : A1) + " " +
        (A2Count === 0 ? "N" : A2) + " " +
        (A3 === 0 ? "N" : A3) + " " +
        (A4Count === 0 ? "N" : (A4 * 1.0 / A4Count).toFixed(1)) + " " +
        (A5 === 0 ? "N" : A5))
}
