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
    if (/^A*PATA*$/.test(inputs)) {
        var indexOfPAT = inputs.indexOf('PAT')
        return indexOfPAT*2+3===inputs.length?'YES':'NO'
    } else if(/^A*PA+TA*$/.test(inputs)){
        var a = inputs.split('P')[0]
        var b = inputs.split('P')[1].split('AT')[0]
        var c = inputs.split('P')[1].split('AT')[1];
        try{
            c = c.substring(0, c.length-a.length);
            return deal(a + 'P' + b + 'T' + c)
        }catch(e){
            return 'NO';
        }
    }else{
        return 'NO';
    }
}
