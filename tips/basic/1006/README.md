# [1006. 换个格式输出整数 (15)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  400 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

让我们用字母B来表示“百”、字母S表示“十”，用“12...n”来表示个位数字n（<10），换个格式来输出任一个不超过3位的正整数。例如234应该被输出为BBSSS1234，因为它有2个“百”、3个“十”、以及个位的4。

**输入格式**：  
每个测试输入包含1个测试用例，给出正整数n（<1000）。

**输出格式**：  
每个测试用例的输出占一行，用规定的格式输出n。

**输入样例1**：
> 234

**输出样例1**：
> BBSSS1234

**输入样例2**：
> 23

**输出样例2**：
> SS123


## 思路
无特殊技巧, 会使用**循环**即可
### Java
```java
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        char[] num = String.format("%03d", in.nextInt()).toCharArray();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < num[0] - '0'; i++) {
            sb.append("B");
        }
        for (int i = 0; i < num[1] - '0'; i++) {
            sb.append("S");
        }
        for (int i = 0; i < num[2] - '0'; i++) {
            sb.append(i + 1);
        }
        System.out.println(sb.toString());
    }
}
```
### JavaScript
简单的字符串操作
```JavaScript
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
//重复某个字符串n次
function repeat(str , n){
  return new Array(n+1).join(str);
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1006
