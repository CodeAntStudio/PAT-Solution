# [1027. 打印沙漏(20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  200 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

本题要求你写个程序把给定的符号打印成沙漏的形状。例如给定17个“*”，要求按下列格式打印
```
*****
 ***
  *
 ***
*****
```

所谓“沙漏形状”，是指每行输出奇数个符号；各行符号中心对齐；相邻两行符号数差2；符号数先从大到小顺序递减到1，再从小到大顺序递增；首尾符号数相等。

给定任意N个符号，不一定能正好组成一个沙漏。要求打印出的沙漏能用掉尽可能多的符号。

**输入格式**：  
输入在一行给出1个正整数N（<=1000）和一个符号，中间以空格分隔。

**输出格式**：  
首先打印出由给定符号组成的最大的沙漏形状，最后在一行中输出剩下没用掉的符号数。

**输入样例**：
> 19 *

**输出样例**：
```
*****  
 ***  
  *  
 ***  
*****  
2
```


## 思路

- **Java**(87~102ms), AC。

### Java
```java
public class Main {

    private static int f(int n) {
        return 2 * n * n - 1;
    }

    private static int _f(int s) {
        return (int) Math.sqrt((s + 1) / 2);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        char c = in.next().toCharArray()[0];
        int p = _f(n);

        for (int i = p, k = 0; i >= 1; i--, k++) {
            for (int j = 0; j < k; j++) {
                System.out.print(" ");
            }
            for (int j = 0; j < 2 * i - 1; j++) {
                System.out.print(c);
            }
            System.out.println();
        }
        for (int i = 2, k = p - i; i <= p; i++,k--) {
            for (int j = 0; j < k; j++) {
                System.out.print(" ");
            }
            for (int j = 0; j < 2 * i - 1; j++) {
                System.out.print(c);
            }
            System.out.println();
        }
        System.out.println(n - f(p));
    }
}
```

[title]: https://www.patest.cn/contests/pat-b-practise/1027
