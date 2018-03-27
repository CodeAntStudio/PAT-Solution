# [1024. 科学计数法 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  100 ms | 65536 kB|   8000 B   | Standard|HOU, Qiming|

科学计数法是科学家用来表示很大或很小的数字的一种方便的方法，其满足正则表达式[+-][1-9]"."[0-9]+E[+-][0-9]+，即数字的整数部分只有1位，小数部分至少有1位，该数字及其指数部分的正负号即使对正数也必定明确给出。

现以科学计数法的格式给出实数A，请编写程序按普通数字表示法输出A，并保证所有有效位都被保留。

**输入格式**：  
每个输入包含1个测试用例，即一个以科学计数法表示的实数A。该数字的存储长度不超过9999字节，且其指数的绝对值不超过9999。

**输出格式**：  
对每个测试用例，在一行中按普通数字表示法输出A，并保证所有有效位都被保留，包括末尾的0。

**输入样例1**：
> +1.23400E-03

**输出样例1**：
> 0.00123400

**输入样例2**：
> -1.2E+10

**输出样例2**：
> -12000000000

## 思路
无,仔细审题，仔细考虑所有情况即可。

- **C++**(2~6ms), AC。


### C++
```c++
#include <bits/stdc++.h>
//获得数字，如：+1.23400E-03，hx="1.23400",返回字母E的位置：8
int getHx(char s[],char hx[]){
    int i;
    for(i=1;i<strlen(s);i++){
        if(s[i]=='E'){
            hx[i-1]='\0';
            return i;
        }
        hx[i-1]=s[i];
    }
}
//获得指数。如：+1.23400E-03，zs="-03"
void getZs(char s[],char zs[],int index_of_E){
    int i,j;
    for(i=index_of_E+1,j=0;i<strlen(s);i++,j++){
        zs[j] = s[i];
    }
    zs[j]='\0';
}
//将指数（字符数组）转换成数字（int）。如："-03"=-3
int getMoveDistance(char zs[]){
    int i,s=0;
    for(i=1;i<strlen(zs);i++){
        s=s*10+zs[i]-'0';
    }
    return zs[0]=='-'?-s:s;
}
//获得小数点的位置。如"+1.23400E-03"=1
int getIndexOfPoint(char hx[]){
    int i;
    for(i=0;i<strlen(hx);i++){
        if(hx[i]=='.'){
            return i;
        }
    }
}
//移动小数点获得结果。
void getResult(char hx[],char r[],int index_of_point,int d){
    strcpy(r,hx);
    int i,j,l = strlen(hx);
    if(d >= 0){//右移
        if(index_of_point+d<=l){//右移足够
            if(d==0){
                strcpy(r,hx);
            }else{
                strcpy(r,hx);
                for(i=index_of_point+1;i<=index_of_point+d;i++){
                    r[i-1]=hx[i];
                }
                if(i==l){
                    r[i-1]='\0';
                }else{
                    r[i-1]='.';
                }
            }
        }else{//右移不足
            for(i=0;i<=index_of_point+d;i++){
                if(i<index_of_point){
                    r[i]=hx[i];
                }else if(i==index_of_point){
                    continue;
                }else if(i<l){
                    r[i-1]=hx[i];
                }else{
                    r[i-1]='0';
                }
            }
            r[i]='\0';
        }
    }else{
        r[0]='0';
        r[1]='.';
        int i,j,k,start;
        for(i=2;i<-index_of_point-d+2;i++){
            r[i]='0';
        }
        start = i;
        for(j=start,k=0;k<strlen(hx);j++,k++){
            if(k==index_of_point){
                j--;
                continue;
            }
            r[j]=hx[k];
            r[j]=hx[k];
        }
        r[j]='\0';
    }
}
void f(char s[]){
    char s1[100005];
    strcpy(s1,s);
    char hx[100005];//数字
    memset(hx,'0',sizeof(hx));
    int index_of_E = getHx(s,hx);
    char zs[100005];//指数
    memset(zs,'0',sizeof(zs));
    getZs(s,zs,index_of_E);
    int index_of_point = getIndexOfPoint(hx);
    int d = getMoveDistance(zs);//小数点移动的举例（+右移；-左移）
    char r[100005];
    getResult(hx,r,index_of_point,d);
    strcpy(s,r);
}
int main(){
    char s[100005];
    memset(s,'0',sizeof(s));
    scanf("%s",s);
    bool isFu = s[0]=='-';
    f(s);
    if(isFu){
        printf("-");
    }
    printf("%s\n",s);
    return 0;
}
```

[title]: https://www.patest.cn/contests/pat-b-practise/1024
