# [1019. 数字黑洞 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  100 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

给定任一个各位数字不完全相同的4位正整数，如果我们先把4个数字按非递增排序，再按非递减排序，然后用第1个数字减第2个数字，将得到一个新的数字。一直重复这样做，我们很快会停在有“数字黑洞”之称的6174，这个神奇的数字也叫Kaprekar常数。  

例如，我们从6767开始，将得到
> 7766 - 6677 = 1089  
> 9810 - 0189 = 9621  
> 9621 - 1269 = 8352  
> 8532 - 2358 = 6174  
> 7641 - 1467 = 6174  
> ... ...


现给定任意4位正整数，请编写程序演示到达黑洞的过程。

**输入格式**：  
输入给出一个(0, 10000)区间内的正整数N。

**输出格式**：  
如果N的4位数字全相等，则在一行内输出“N - N = 0000”；否则将计算的每一步在一行内输出，直到6174作为差出现，输出格式见样例。注意每个数字按4位数格式输出。

**输入样例1**：
> 6767  

**输出样例1**：
> 7766 - 6677 = 1089  
> 9810 - 0189 = 9621  
> 9621 - 1269 = 8352  
> 8532 - 2358 = 6174  
  
**输入样例2**：
> 2222

**输出样例2**：
> 2222 - 2222 = 0000

## 思路
无特殊技巧。输出时注意0~999的数字的处理。
 >   8 -> 0008  
 >  17 -> 0017  
 > 728 -> 0728


- **C++**(2~3ms), AC。


### C++
```c++
#include <cstdio>
#include <cstring>
#include <algorithm>
#include <iostream>
#include <cmath>
#include <string>
using namespace std;
int c2i(char c[]){
    int sum=0;
    for(int i=0;i<strlen(c);i++){
        sum=sum*10+c[i]-'0';
    }
    return sum;
}
void i2c(int n,char* c){
    int k=0,i,j;
    do{
        c[k++]=n%10+'0';
        n=n/10;
    }while(n);
    c[k]='\0';
    char cc[4];
    if(k<4){
        for(i=k-1,j=3;i>=0;i--,j--){
            cc[j]=c[i];
        }
        for(i=0;i<4-k;i++){
            cc[j]='0';
        }
        cc[4]='\0';
        strcpy(c,cc);
    }
}
void f(char c[]){
    int i,j;
    for(i=0;i<4;i++){
        for(j=0;j<3;j++){
            if(c[j]<c[j+1]){
                char t = c[j];
                c[j]=c[j+1];
                c[j+1]=t;
            }
        }
    }
    int n1 = c2i(c);
    string cc = c;
    reverse(cc.begin(),cc.begin()+4);
    char _c[4];
    strcpy(_c,cc.c_str());
    int n2 = c2i(_c);
    int r = n1-n2;
    printf("%04d - %04d = %04d\n",n1,n2,r);
    if(r==0||r==6174){
        getchar();
        return;
    }
    i2c(r,_c);
    f(_c);
}
int main(){
    char c[]="0316";
    int n;
    while(scanf("%s",c)!=EOF){
        if(strlen(c)<4){
            string cc;
            for(int i=0;i<4-strlen(c);i++){
                cc+="0";
            }
            cc+=c;
            strcpy(c,cc.c_str());
        }
        f(c);
    }
    return 0;
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1019
