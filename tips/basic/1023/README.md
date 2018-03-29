# [1023. 组个最小数 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  100 ms | 65536 kB|   8000 B   | Standard|CAO, Peng|

给定数字0-9各若干个。你可以以任意顺序排列这些数字，但必须全部使用。目标是使得最后得到的数尽可能小（注意0不能做首位）。例如：给定两个0，两个1，三个5，一个8，我们得到的最小的数就是10015558。

现给定数字，请编写程序输出能够组成的最小的数。

**输入格式**：  
每个输入包含1个测试用例。每个测试用例在一行中给出10个非负整数，顺序表示我们拥有数字0、数字1、……数字9的个数。整数间用一个空格分隔。10个数字的总个数不超过50，且至少拥有1个非0的数字。

**输出格式**：  
在一行中输出能够组成的最小的数。

**输入样例**：
> 2 2 0 0 0 3 0 0 1 0

**输出样例**：
> 10015558

## 思路
无

- **C++**(2~3ms), AC。
- **Java**(96~98ms), AC。易超时，多试试吧。


### C++
```c++
#include <bits/stdc++.h>
using namespace std;
int main(){
    int r[55];
    int _0;
    int num=0;
    memset(r,-1,sizeof(r));
    scanf("%d",&_0);
    for(int i = 1;i < 10; i++){
        int n;
        scanf("%d",&n);
        if(_0!=0&&n!=0){
            r[num++]=i;
            for(int j=0;j<_0;j++){
                r[num++] = 0;
            }
            for(int j=0;j<n-1;j++){
                r[num++]=i;
            }
            _0=0;
            continue;
        }
        if(n!=0){
            for(int j=0;j<n;j++){
                r[num++]=i;
            }
        }
    }
    for(int i=0;i<num;i++){
        printf("%d",r[i]);
    }
    return 0;
}
```

### Java
```java
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String num = "";
        int count0 = in.nextInt();
        if (count0 > 0) {
            for (int j = 0; j < count0; j++) {
                num += 0;
            }
        }
        boolean handled = false;
        for (int i = 1; i < 10; i++) {
            int c = in.nextInt();
            if (c == 0) continue;

            if (handled) {
                for (int j = 0; j < c; j++) {
                    num += i;
                }
            } else {
                if (num.length() > 0 && num.charAt(0) == '0') {
                    num = i + num;
                    handled = true;
                    for (int j = 1; j < c; j++) {
                        num += i;
                    }
                } else {
                    for (int j = 0; j < c; j++) {
                        num += i;
                    }
                }
            }
        }
        System.out.println(num);
    }
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1023
