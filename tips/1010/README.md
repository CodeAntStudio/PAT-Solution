# [1010. 一元多项式求导 (25)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  400 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

设计函数求一元多项式的导数。（注：xn（n为整数）的一阶导数为n*xn-1。）

**输入格式**：  
以指数递降方式输入多项式非零项系数和指数（绝对值均为不超过1000的整数）。数字间以空格分隔。

**输出格式**：  
以与输入相同的格式输出导数多项式非零项的系数和指数。数字间以空格分隔，但结尾不能有多余空格。注意“零多项式”的指数和系数都是0，但是表示为“0 0”。

**输入样例**：
> 3 4 -5 2 6 1 -2 0

**输出样例**：
> 12 3 -10 1 6 0

## 思路
无特殊技巧。注意特殊情况考虑即可。
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
一样的逻辑，JavaScript运行错误
```JavaScript
function deal(str) {
  var arr = str.trim().split(' ')
  var arr1 = []
  if (arr.length === 2 && +arr[1] === 0) {
    arr1.push(0,0)
  } else {
    for (var i = 0; i < arr.length; i += 2) {
      if (+arr[i+1] === 0) {
        continue
      }
      arr1.push(arr[i]*arr[i + 1])
      arr1.push(arr[i + 1] - 1)
    }
  }
  return arr1.join(' ')
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1010
