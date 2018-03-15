/*测试用例超时
题目：德才论
描述：
宋代史学家司马光在《资治通鉴》中有一段著名的“德才论”：“是故才德全尽谓之圣人，才德兼亡谓之愚人，德胜才谓之君子，
才胜德谓之小人。凡取人之术，苟不得圣人，君子而与之，与其得小人，不若得愚人。”

现给出一批考生的德才分数，请根据司马光的理论给出录取排名。

输入格式：

输入第1行给出3个正整数，分别为：N（<=105），即考生总数；L（>=60），为录取最低分数线，即德分和才分均不低于L的考生才有资格被考虑录取；
H（<100），为优先录取线——德分和才分均不低于此线的被定义为“才德全尽”，此类考生按德才总分从高到低排序；才分不到但德分到线的一类考生属于
“德胜才”，也按总分排序，但排在第一类考生之后；德才分均低于H，但是德分不低于才分的考生属于“才德兼亡”但尚有“德胜才”者，按总分排序，
但排在第二类考生之后；其他达到最低线L的考生也按总分排序，但排在第三类考生之后。

随后N行，每行给出一位考生的信息，包括：准考证号、德分、才分，其中准考证号为8位整数，德才分为区间[0, 100]内的整数。数字间以空格分隔。

输出格式：

输出第1行首先给出达到最低分数线的考生人数M，随后M行，每行按照输入格式输出一位考生的信息，
考生按输入中说明的规则从高到低排序。当某类考生中有多人总分相同时，按其德分降序排列；若德分也并列，则按准考证号的升序输出。

输入样例：
14 60 80
10000001 64 90
10000002 90 60
10000011 85 80
10000003 85 80
10000004 80 85
10000005 82 77
10000006 83 76
10000007 90 78
10000008 75 79
10000009 59 90
10000010 88 45
10000012 80 100
10000013 90 99
10000014 66 60
输出样例：
12
10000013 90 99
10000012 80 100
10000003 85 80
10000011 85 80
10000004 80 85
10000007 90 78
10000006 83 76
10000005 82 77
10000002 90 60
10000014 66 60
10000008 75 79
10000001 64 90
 */
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
