# [1022. D进制的A+B (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  100 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

输入两个非负10进制整数A和B(<=230-1)，输出A+B的D (1 < D <= 10)进制数。

**输入格式**：  
输入在一行中依次给出3个整数A、B和D。

**输出格式**：  
输出A+B的D进制数。

**输入样例**：
> 123 456 8

**输出样例**：
> 1103

## 思路
无


- **C++**(1~2ms), AC。
- **Java**(96~99ms), AC。仔细观察输入数据的范围，a+b都没超过Long的最大值。不要盲目使用BigInteger。


### C++
```c++
#include<bits/stdc++.h>
using namespace std;
void f(long long r,int d){
    if(r==0)return;
    f(r/d,d);
    printf("%lld",r%d);
}
int main(){
    long long a,b,r;
    int d;
    scanf("%lld %lld %d",&a,&b,&d);
    r = a + b;
    if(r==0){
        printf("0\n");
    }else{
        f(r,d);
    }
    return 0;
}
```

### Java
```
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        long a = in.nextLong();
        long b = in.nextLong();
        System.out.println(Long.toString(a + b, in.nextInt()));
    }
}

```
[title]: https://www.patest.cn/contests/pat-b-practise/1022
