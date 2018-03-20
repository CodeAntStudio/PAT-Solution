# [1011. A+B和C (15)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  150 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

给定区间[-2<sup>31</sup>, 2<sup>31</sup>]内的3个整数A、B和C，请判断A+B是否大于C。

**输入格式**：  
输入第1行给出正整数T(<=10)，是测试用例的个数。随后给出T组测试用例，每组占一行，顺序给出A、B和C。整数间以空格分隔。

**输出格式**：  
对每组测试用例，在一行中输出“Case #X: true”如果A+B>C，否则输出“Case #X: false”，其中X是测试用例的编号（从1开始）。

**输入样例**：
> 4  
> 1 2 3  
> 2 3 4  
> 2147483647 0 2147483646  
> 0 -2147483648 -2147483647  

**输出样例**：
> Case #1: false  
> Case #2: true  
> Case #3: true  
> Case #4: false  

## 思路
无特殊技巧。注意数值范围即可。

int的范围为[-2<sup>31</sup>, 2<sup>31</sup>-1]（题目描述的输入范围已经超出这个范围了）
long的范围为[-2<sup>63</sup>, 2<sup>63</sup>-1]

根据题目描述, a+b的范围为[-2<sup>32</sup>, 2<sup>32</sup>]。因此使用long类型就足够了。

### Java
```java
public class Main {
    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        List<Integer> list = new ArrayList<>();
        List<Integer> result = new ArrayList<>();
        while (cin.hasNext()) {
            list.add(cin.nextInt());
        }
        if (list.size() == 2 && list.get(1) == 0) {
            System.out.println("0 0");
            return;
        } else {
            for (int i = 0; i < list.size(); i += 2) {
                Integer n = list.get(i + 1);
                if (n == 0) {
                    continue;
                }
                result.add(list.get(i) * n);
                result.add(n - 1);
            }
        }
        System.out.println(Arrays.toString(result.toArray(new Integer[result.size()])).replaceAll("\\[|\\]|,", ""));
    }
}
```
### JavaScript
```JavaScript
var readline = require('readline');

rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var nline = +inputArr[0]
    var arr = inputArr.slice(1);
    if (inputArr.length === nline + 1) {
      for(var i = 0; i < nline; i++) {
        console.log('Case #' + (i+1) + ': '+ deal(arr[i].trim().split(' ')));
      }
      rl.close();
    }

});

function deal(arr) {
  if (+arr[0] + +arr[1] > +arr[2]) {
    return true
  } else {
    return false
  }
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1011
