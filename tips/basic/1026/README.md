# [1026. 程序运行时间(15)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  200 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

要获得一个C语言程序的运行时间，常用的方法是调用头文件time.h，其中提供了clock()函数，可以捕捉从程序开始运行到clock()被调用时所耗费的时间。这个时间单位是clock tick，即“时钟打点”。同时还有一个常数CLK_TCK，给出了机器时钟每秒所走的时钟打点数。于是为了获得一个函数f的运行时间，我们只要在调用f之前先调用clock()，获得一个时钟打点数C1；在f执行完成后再调用clock()，获得另一个时钟打点数C2；两次获得的时钟打点数之差(C2-C1)就是f运行所消耗的时钟打点数，再除以常数CLK_TCK，就得到了以秒为单位的运行时间。

这里不妨简单假设常数CLK_TCK为100。现给定被测函数前后两次获得的时钟打点数，请你给出被测函数运行的时间。

**输入格式**：  
输入在一行中顺序给出2个整数C1和C2。注意两次获得的时钟打点数肯定不相同，即C1 < C2，并且取值在[0, 10<sup>7</sup>]。

**输出格式**：  
在一行中输出被测函数运行的时间。运行时间必须按照“hh:mm:ss”（即2位的“时:分:秒”）格式输出；不足1秒的时间四舍五入到秒。

**输入样例**：
> 123 4577973

**输出样例**：
> 12:42:59


## 思路
别看题目叨逼叨说了一大堆不知道在干啥的话。其实是一道超简单的题目。  
简而言之: c2-c1/100 得到的数四舍五入 再整成xx:xx:xx的格式

- **C++**(1ms), AC。
- **Java**(87~89ms), AC。


### C++
```c++
#include<stdio.h>
int main(){
    int c1, c2;
    scanf("%d %d", &c1, &c2);
    int t = (int)((c2-c1)/100.0+0.5);
    int h = t/3600;
    int m = t%3600/60;
    int s = t%60;
    printf("%02d:%02d:%02d\n",h,m,s);
    return 0;
}
```

### Java
```java
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int c1 = in.nextInt();
        int c2 = in.nextInt();
        int t = (int) ((c2 - c1) / 100.0 + 0.5);
        int h = t / 3600;
        int m = t % 3600 / 60;
        int s = t % 60;
        System.out.format("%02d:%02d:%02d\n", h, m, s);
    }
}
```

[title]: https://www.patest.cn/contests/pat-b-practise/1026
