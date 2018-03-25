# [1021. 个位数统计 (15)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  100 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

给定一个k位整数N = dk-1*10k-1 + ... + d1*101 + d0 (0<=di<=9, i=0,...,k-1, dk-1>0)，请编写程序统计每种不同的个位数字出现的次数。例如：给定N = 100311，则有2个0，3个1，和1个3。

**输入格式**：  
每个输入包含1个测试用例，即一个不超过1000位的正整数N。

**输出格式**：  
对N中每一种不同的个位数字，以D:M的格式在一行中输出该位数字D及其在N中出现的次数M。要求按D的升序输出。

**输入样例**：
> 100311

**输出样例**：
> 0:2  
> 1:3  
> 3:1


## 思路
无


- **C++**(2~3ms), AC。
- **Java**(93~96ms), AC, 还是很容易超时，因为接近临界，同样的代码再提交一次说不定就通过了。


### C++
```c++
#include<bits/stdc++.h>
int main(){
    char c[1005];
    scanf("%s",c);
    int n[10];
    memset(n,0,sizeof(n));
    int start = -1;
    for(int i=0;i<strlen(c);i++){
        if(c[i]!='0'){
            start=i;
            break;
        }
    }
    if(start==-1){
        printf("0:0\n");
        return 0;
    }
    for (int i = start; i < strlen(c); i++) {
        n[c[i]-'0']++;
    }
    for (int i = 0; i < 10; i++) {
        if(n[i]!=0){
            printf("%d:%d\n",i,n[i]);
        }
    }
    return 0;
}
```

### Java
```
char[] num = in.next().toCharArray();
int[] count = new int[10];
for (char c : num) {
    count[c - '0']++;
}
for (int i = 0; i < 10; i++) {
    if (count[i] != 0)
        System.out.println(i + ":" + count[i]);
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1021
