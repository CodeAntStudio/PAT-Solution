# [1016. 部分A+B (15)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  100 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

正整数A的“D<sub>A</sub>（为1位整数）部分”定义为由A中所有D<sub>A</sub>组成的新整数P<sub>A</sub>。例如：给定A = 3862767，D<sub>A</sub> = 6，则A的“6部分”P<sub>A</sub>是66，因为A中有2个6。

现给定A、D<sub>A</sub>、B、D<sub>B</sub>，请编写程序计算PA + PB。
**输入格式**：  
输入在一行中依次给出A、D<sub>A</sub>、B、D<sub>B</sub>，中间以空格分隔，其中0 < A, B < 10<sup>10</sup>。

**输出格式**：  
在一行中输出P<sub>A</sub> + P<sub>B</sub>的值。

**输入样例1**：
> 3862767 6 13530293 3

**输出样例1**：
> 399

**输入样例2**：
> 3862767 1 13530293 8

**输出样例2**：
> 0
## 思路
无特殊技巧。题目本身没有难度。Java易超时。

- **C**(1~3ms), AC.
- **JavaScript**(53~54ms), AC。
- **Java**(95~97ms), 有一个用例超时。

### C
```c
#include <stdio.h>
#include <math.h>
#include <string.h>
int l(int n){
    if(n==0){
        return 1;
    }
    int s =0 ;
    while(n!=0){
        n/=10;
        s++;
    }
    return s;
}
char* itoa(int num,char*str,int radix){/*索引表*/
    char index[]="0123456789ABCDEF";
    unsigned unum;/*中间变量*/
    int i=0,j,k;
    /*确定unum的值*/
    if(radix==10&&num<0){/*十进制负数*/
        unum=(unsigned)-num;
        str[i++]='-';
    }
    else
        unum=(unsigned)num;/*其他情况*/
    /*转换*/
    do{
        str[i++]=index[unum%(unsigned)radix];
        unum/=radix;
    }while(unum);
    str[i]='\0';
    /*逆序*/
    if(str[0]=='-')
        k=1;/*十进制负数*/
    else
        k=0;
    char temp;
    for(j=k;j<=(i-1)/2;j++){
        temp=str[j];
        str[j]=str[i-1+k-j];
        str[i-1+k-j]=temp;
    }
    return str;
}
int p(int a, int d) {
    int sum = 0;
    int n = 0;
    char c[11];
    itoa(a,c,10);
    for (int i = 0; i < strlen(c); i++) {
        if(c[i]-'0'==d){
            sum=sum*10+d;
        }
    }
    return sum;
}
int main(){
    int A,DA,B,DB;
    scanf("%d %d %d %d",&A,&DA,&B,&DB);
    printf("%d\n",p(A,DA)+p(B,DB));
    return 0;
}
```

### JavaScript
```javascript
var readline = require('readline')

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function(input) {
  var A = input.split(' ')[0]
  var Da = input.split(' ')[1]
  var B = input.split(' ')[2]
  var Db = input.split(' ')[3]
  var result = deal(A,Da,B,Db)
  console.log(result);
  rl.close()
})
function deal(A,Da,B,Db) {
  var Pa = []
  for(var i = 0; i < A.length; i++) {
    if(A[i] === Da) {
      Pa.push(A[i])
    }
  }
  var Pb = []
  for(var i = 0; i < B.length; i++) {
    if(B[i] === Db) {
      Pb.push(B[i])
    }
  }
  return (+Pa.join('')) + (+Pb.join(''))
}
```

### Java
```java
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String[] strs = in.nextLine().split(" ");
        StringBuilder s1 = new StringBuilder();
        StringBuilder s2 = new StringBuilder();
        for (char c : strs[0].toCharArray()) {
            if ((c + "").equals(strs[1])) {
                s1.append(c);
            }
        }
        for (char c : strs[2].toCharArray()) {
            if ((c + "").equals(strs[3])) {
                s2.append(c);
            }
        }
        System.out.println(
                Integer.parseInt(s1.toString().equals("") ? "0" : s1.toString()) +
                        Integer.parseInt(s2.toString().equals("") ? "0" : s2.toString()));
    }
}
```

[title]: https://www.patest.cn/contests/pat-b-practise/1016
