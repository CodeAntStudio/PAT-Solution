# [1012. 数字分类 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  100 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

给定一系列正整数，请按要求对数字进行分类，并输出以下5个数字：\

 - A1 = 能被5整除的数字中所有偶数的和；
 - A2 = 将被5除后余1的数字按给出顺序进行交错求和，即计算n1-n2+n3-n4...；
 - A3 = 被5除后余2的数字的个数；
 - A4 = 被5除后余3的数字的平均数，精确到小数点后1位；
 - A5 = 被5除后余4的数字中最大数字。

**输入格式**：  
输每个输入包含1个测试用例。每个测试用例先给出一个不超过1000的正整数N，随后给出N个不超过1000的待分类的正整数。数字间以空格分隔。

**输出格式**：  
对给定的N个正整数，按题目要求计算A1~A5并在一行中顺序输出。数字间以空格分隔，但行末不得有多余空格。

若其中某一类数字不存在，则在相应位置输出“N”。

**输入样例1**：
> 13 1 2 3 4 5 6 7 8 9 10 20 16 18

**输出样例1**：
> 30 11 2 9.7 9

**输入样例2**：
> 8 1 2 4 5 6 7 9 16

**输出样例2**：
> N 11 2 N 9

## 思路
无特殊技巧。题目本身没有难度。时间限制比较严格，Java很容易超时。我用了四种语言都尝试提交。

- **C**(0~3ms), AC。
- **python2.7**(10~13ms), AC。
- **JavaScript**(52~54ms), AC。
- **Java**(61~65ms), 有一个用例超时。

网上也没找到此题的Java题解(AC)。哎😔, Java果然是遭黑体质。

### C
```c
// 0~3ms
#include<stdio.h>
int main(){
    int num, n, i,A1=0,A2=0,A2Count=0,A3=0,A4Count=0,A5=0;
    double A4 = 0.0;
    scanf("%d", &num);
    for (i = 0; i < num; i++) {
        scanf("%d",&n);
        A1 += n % 10 == 0 ? n : 0;
        A2Count += n % 5 == 1 ? 1 : 0;
        A2 += n % 5 == 1 ? (A2Count % 2 == 1 ? 1 : -1) * n : 0;
        A3 += n % 5 == 2 ? 1 : 0;
        A4Count += n % 5 == 3 ? 1 : 0;
        A4 += n % 5 == 3 ? n : 0;
        A5 = n % 5 == 4 && n > A5 ? n : A5;
    }
    if(A1 != 0) printf("%d ",A1);
    else printf("N ");
    if(A2Count != 0) printf("%d ",A2);
    else printf("N ");
    if(A3 != 0) printf("%d ",A3);
    else printf("N ");
    if(A4Count != 0) printf("%.1lf ",A4 / A4Count);
    else printf("N ");
    if(A5 != 0) printf("%d",A5);
    else printf("N");
}
```
### python
```python
line = raw_input().split()
A1 = 0
A2 = 0
A2Count = 0
A3 = 0
A4 = 0
A4Count = 0
A5 = 0
count = 0
for i in line:
    n = int(i)
    if count == 0:
        count += 1
        continue
    else:
        A1 += n if n % 10 == 0 else 0
        A2Count += 1 if n % 5 == 1 else 0
        A2 += (1 if A2Count % 2 == 1 else -1) * n if n % 5 == 1 else 0
        A3 += 1 if n % 5 == 2 else 0
        A4Count += 1 if n % 5 == 3 else 0
        A4 += n if n % 5 == 3 else 0
        A5 = n if n % 5 == 4 and n > A5 else A5
print(("N" if A1 == 0 else str(A1)) + " " +
      ("N" if A2Count == 0 else str(A2)) + " " +
      ("N" if A3 == 0 else str(A3)) + " " +
      ("N" if A4Count == 0 else str(round(A4 * 1.0 / A4Count, 1))) + " " +
      ("N" if A5 == 0 else str(A5)))

```

### JavaScript
```javascript
var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var arr = input.split(' ').slice(1);
    console.log(deal(arr))
    rl.close();
});

function deal(inputs) {
    var A1 = 0
    var A2 = 0, A2Count = 0
    var A3 = 0
    var A4 = 0, A4Count = 0;
    var A5 = 0
    for (var i in inputs) {
        var n = +inputs[i]
        A1 += n % 10 === 0 ? n : 0;
        A2Count += n % 5 === 1 ? 1 : 0;
        A2 += n % 5 === 1 ? (A2Count % 2 === 1 ? 1 : -1) * n : 0;
        A3 += n % 5 === 2 ? 1 : 0;
        A4Count += n % 5 === 3 ? 1 : 0;
        A4 += n % 5 === 3 ? n : 0;
        A5 = n % 5 === 4 && n > A5 ? n : A5;
    }
    return ((A1 === 0 ? "N" : A1) + " " +
        (A2Count === 0 ? "N" : A2) + " " +
        (A3 === 0 ? "N" : A3) + " " +
        (A4Count === 0 ? "N" : (A4 * 1.0 / A4Count).toFixed(1)) + " " +
        (A5 === 0 ? "N" : A5))
}

```

### Java
Java代码贴出来吧。不知还有没有优化的余地。
```java
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int A1 = 0;
        int A2 = 0, A2Count = 0;
        int A3 = 0;
        int A4 = 0, A4Count = 0;
        int A5 = 0;
        int num = in.nextInt();
        for (int i = 0; i < num; i++) {
            int n = in.nextInt();
            A1 += n % 10 == 0 ? n : 0;
            A2Count += n % 5 == 1 ? 1 : 0;
            A2 += n % 5 == 1 ? (A2Count % 2 == 1 ? 1 : -1) * n : 0;
            A3 += n % 5 == 2 ? 1 : 0;
            A4Count += n % 5 == 3 ? 1 : 0;
            A4 += n % 5 == 3 ? n : 0;
            A5 = n % 5 == 4 && n > A5 ? n : A5;
        }
        System.out.println((A1 == 0 ? "N" : A1) + " " +
                (A2Count == 0 ? "N" : A2) + " " +
                (A3 == 0 ? "N" : A3) + " " +
                (A4Count == 0 ? "N" : String.format(Locale.ENGLISH, "%.1f", A4 * 1.0 / A4Count)) + " " +
                (A5 == 0 ? "N" : A5));
    }
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1012