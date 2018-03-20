# [1017. A除以B (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  100 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

本题要求计算A/B，其中A是不超过1000位的正整数，B是1位正整数。你需要输出商数Q和余数R，使得A = B * Q + R成立。
**输入格式**：  
输入在1行中依次给出A和B，中间以1空格分隔。

**输出格式**：  
在1行中依次输出Q和R，中间以1空格分隔。

**输入样例**：
> 123456789050987654321 7

**输出样例**：
> 17636684150141093474 3

## 思路
大数除法。

- **C**(1~2ms),AC。
- **JavaScript**(53~63ms), AC。
- **Java**(超时)。


### C
```c
#include <stdio.h>
#include <string.h>
void f(char s[], int n) {
    int i,r[strlen(s)];
    int m = 0;
    for (int i = 0; i < strlen(s); i++) {
        r[i] = (m * 10 + s[i] - '0') / n;
        m = (m * 10 + s[i] - '0') % n;
    }
    int start = 0;
    for(i=0; i<strlen(s);i++){
        if(r[i]!=0){
            start=i;
            break;
        }
    }
    for(i=start;i<strlen(s);i++){
        printf("%d",r[i]);
    }
    printf(" %d\n",m);
}
int main(){
    char s[1005];
    int n;
    scanf("%s %d",s,&n);
    f(s,n);
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
  var B = input.split(' ')[1]
  var result = deal(A, B)
  console.log(result);
  rl.close()
})
function deal(A, B) {
  if((+A) < (+B)) {
    return '0 '+A
  }
  if ((+A) === (+B)) {
    return '1 0'
  }
  var quotient = 0;//商数
  var remainder = 0;//余数
  remainder = (+A[0])%(+B)
  quotient = (+A[0]-remainder) / (+B)
  var x = quotient===0?'':(quotient +'')
  for(var i = 1; i < A.length; i++) {
    var temp = remainder*10+ (+A[i])
    remainder = temp % (+B)
    quotient = (temp - (+remainder)) / (+B)
    x += quotient
  }
  return x +' ' + remainder
}
```

### Java
```java
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        BigInteger a = new BigInteger(in.next());
        BigInteger b = new BigInteger(in.next());
        System.out.println(a.divide(b) + " " + a.mod(b));
    }
}
```

[title]: https://www.patest.cn/contests/pat-b-practise/1017
