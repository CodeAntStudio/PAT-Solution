# [1002. 写出这个数 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  400 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

读入一个自然数n，计算其各位数字之和，用汉语拼音写出和的每一位数字。

**输入格式**：每个测试输入包含1个测试用例，即给出自然数n的值。这里保证n小于10<sup>100<sup>。

**输出格式**：在一行内输出n的各位数字之和的每一位，拼音数字间有1 空格，但一行中最后一个拼音数字后没有空格。

**输入样例**：
> 1234567890987654321123456789

**输出样例**：
> yi san wu

## 思路
技巧点在与将输入当**字符串**处理,不要将输入当**int**或**long**处理.
> int范围: [-2<sup>31</sup>, 2<sup>31</sup>-1] => [-2147483648, 2147483647] 10位数  
> long范围: [-2<sup>63</sup> , 2<sup>63</sup>-1] => [-9223372036854775808, 9223372036854775807]  19位数

这两个范围对比输入要求的100位数, 都是小巫见大巫。
### Java
```java
public class Main{

    private static int deal(String input) {
        int sum = 0;
        for (int i = 0; i < input.length(); i++) {
            sum += input.charAt(i) - '0';
        }
        return sum;
    }

    private static void printNum(int sum) {
        String[] pinyin = {"ling", "yi", "er", "san", "si", "wu", "liu", "qi", "ba", "jiu"};
        String result = String.valueOf(sum);
        System.out.print(pinyin[result.charAt(0) - '0']);
        for (int i = 1; i < result.length(); i++) {
            System.out.print(" " + pinyin[result.charAt(i) - '0']);
        }
    }
}
```
### JavaScript
```JavaScript
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
```
[title]: https://www.patest.cn/contests/pat-b-practise/1002
