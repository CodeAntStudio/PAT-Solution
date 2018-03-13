# [1007. 素数对猜想 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  400 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

让我们定义 d<sub>n</sub> 为：d<sub>n</sub> = p<sub>n-1</sub> - p<sub>n</sub>，其中 p<sub>i</sub> 是第i个素数。显然有 d<sub>1</sub>=1 且对于n>1有 dn 是偶数。“素数对猜想”认为“存在无穷多对相邻且差为2的素数”。

现给定任意正整数N (< 10<sup>5</sup>)，请计算不超过N的满足猜想的素数对的个数。

**输入格式**：  
每个测试输入包含1个测试用例，给出正整数N。

**输出格式**：  
每个测试用例的输出占一行，不超过N的满足猜想的素数对的个数。

**输入样例1**：
> 20

**输出样例1**：
> 4

## 思路
无特殊技巧。对**素数判断**的要求也不高。
```java
public class Main {
    static boolean isPrime(int n) {
        if(n < 2)return false;
        if (n == 2) return true;
        if (n % 2 == 0) return false;
        for (int i = 3; i * i <= n; i += 2) {
            if (n % i == 0) return false;
        }
        return true;
    }
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1007