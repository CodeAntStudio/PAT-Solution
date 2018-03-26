var readline = require('readline')

 rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 })
 var inputArr = []
 rl.on('line', function(input) {
   inputArr.push(input)
   var N = +inputArr[0].split(' ')[0]
   var L = +inputArr[0].split(' ')[1]
   var H = +inputArr[0].split(' ')[2]
   if (inputArr.length === (N + 1)) {
     var result = deal(L, H, inputArr.slice(1))
     console.log(result.length);
     for(var i = 0; i < result.length; i++) {
       console.log(result[i]);
     }
     rl.close()
   }
 })
 function deal(L, H, arr) {
   var resultArr1 = []
   var resultArr2 = []
   var resultArr3 = []
   var resultArr4 = []
   var totalArr = []
   for(var i = 0; i <arr.length; i++ ) {
     if (+arr[i].split(' ')[1] >= L && +arr[i].split(' ')[2] >= L) {
       var moral = +arr[i].split(' ')[1] // 德
       var talent = +arr[i].split(' ')[2] //才
       if ( moral >= H && talent >= H) {
         resultArr1.push(arr[i])
       } else if(moral >= H && talent < H) {
         resultArr2.push(arr[i])
       } else if (moral < H && talent < H && moral >= talent) {
         resultArr3.push(arr[i])
       } else {
         resultArr4.push(arr[i])
       }
     }
   }
   totalArr = totalArr.concat(resultArr1.quick_sort(),resultArr2.quick_sort() ,resultArr3.quick_sort(), resultArr4.quick_sort())
   return totalArr
 }
Array.prototype.quick_sort = function() {
	var len = this.length;
	if (len <= 1)
		return this.slice(0);
	var left = [];
	var right = [];
	var mid = [this[0]];
	for (var i = 1; i < len; i++) {
    var number1 = +this[i].split(' ')[0] //学号
    var moral1 = +this[i].split(' ')[1] // 德
    var talent1 = +this[i].split(' ')[2] //才
    var sum1 = moral1 + talent1
    var number2 = +mid[0].split(' ')[0] //学号
    var moral2 = +mid[0].split(' ')[1] // 德
    var talent2 = +mid[0].split(' ')[2] //才
    var sum2 = moral2 + talent2
		if (sum1 > sum2 ||(sum1 === sum2&&moral1 > moral2) ||(sum1 === sum2&&moral1 === moral2&&number1 < number2))
			left.push(this[i]);
		else
			right.push(this[i]);
  }
	return left.quick_sort().concat(mid.concat(right.quick_sort()));
};
