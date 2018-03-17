# [1008. 数组元素循环右移问题 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  400 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

一个数组A中存有N（N>0）个整数，在不允许使用另外数组的前提下，将每个整数循环向右移M（M>=0）个位置，即将A中的数据由（A<sub>0</sub> A<sub>1</sub>……A<sub>N-1</sub>）变换为（A<sub>N-M</sub> …… A<sub>N-1</sub> A<sub>0</sub> A<sub>1</sub>……A<sub>N-M-1</sub>）（最后M个数循环移至最前面的M个位置）。如果需要考虑程序移动数据的次数尽量少，要如何设计移动的方法？

**输入格式**：  
每个输入包含一个测试用例，第1行输入N ( 1<=N<=100)、M（M>=0）；第2行输入N个整数，之间用空格分隔。

**输出格式**：  
在一行中输出循环右移M位以后的整数序列，之间用空格分隔，序列结尾不能有多余空格。

**输入样例**：
> 6 2
> 1 2 3 4 5 6

**输出样例**：
> 5 6 1 2 3 4

## 思路
无特殊技巧。**循环**、**数组** 合并
### Java
```java
public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int m = in.nextInt();
        m %= n;
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = in.nextInt();
        }
        int[] head = Arrays.copyOfRange(arr, n - m, n);
        int[] tail = Arrays.copyOfRange(arr, 0, n - m);

        int[] newArr = new int[n];
        System.arraycopy(head, 0, newArr, 0, head.length);
        System.arraycopy(tail, 0, newArr, head.length, tail.length);
        System.out.println(Arrays.toString(newArr).replaceAll("\\[|]|,", ""));
    }
}
```
### JavaScript
```JavaScript
// nCount: 为输入N
// nleft: 为输入M
// str: 为输入的字符串
function deal(nCount, nleft, str) {
  var arr = str.split(' ')
  var nleftCount = nleft%nCount
  var arr1 = arr.slice(0,nCount - nleftCount)
  var arr2 = arr.slice(nCount - nleftCount)
  var result = arr2.concat(arr1).join(' ')
  return result
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1008
