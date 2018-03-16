# [1013. 数素数 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  100 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

令P<sub>i</sub>表示第i个素数。现任给两个正整数M <= N <= 10<sup>4</sup>，请输出P<sub>M</sub>到P<sub>N</sub>的所有素数。

**输入格式**：  
输入在一行中给出M和N，其间以空格分隔。

**输出格式**：  
输出从PM到PN的所有素数，每10个数字占1行，其间以空格分隔，但行末不得有多余空格。

**输入样例**：
> 5 27

**输出样例**：
> 11 13 17 19 23 29 31 37 41 43
> 47 53 59 61 67 71 73 79 83 89
> 97 101 103

## 思路
无特殊技巧。题目本身没有难度。时间限制比较严格，Java很容易超时。

- **C**(6~14ms), AC。
- **JavaScript**(53~63ms), AC。
- **Java**,超时。


### C++
```c++
#include<iostream>
#include<cstring>
#include<cstdio>
#include<ctime>
#include<algorithm>
using namespace std;

bool visit[10100000];
int prime[10050];

void init_prim(int n){
    memset(visit, true, sizeof(visit));
    int num = 0;
    for (int i = 2; num <= n; ++i){
        if (visit[i] == true){
            num++;
            prime[num] = i;
        }
        for (int j = 1; ((j <= num) && (i * prime[j] <= 10100000));  ++j){
            visit[i * prime[j]] = false;
            if (i % prime[j] == 0) break;
        }
    }
}

int main()
{
    memset(prime, 0, sizeof(prime));
    int n,m;
    cin>>m;
    cin>>n;
    init_prim(n);
    for(int i = m,j=1; i <= n; ++i,j++){
        if(j%10==0||i==n){
            cout<<prime[i]<<endl;
        }else{
            cout<<prime[i]<<" ";
        }
    }
    return 0;
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
/*
题目：数素数
描述：
令Pi表示第i个素数。现任给两个正整数M <= N <= 104，请输出PM到PN的所有素数。

输入格式：

输入在一行中给出M和N，其间以空格分隔。

输出格式：

输出从PM到PN的所有素数，每10个数字占1行，其间以空格分隔，但行末不得有多余空格。

输入样例：
5 27
输出样例：
11 13 17 19 23 29 31 37 41 43
47 53 59 61 67 71 73 79 83 89
97 101 103
 */

var readline = require('readline');

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function(input) {
  var M = +input.split(' ')[0]
  var N = +input.split(' ')[1]
  var result = deal(M, N)
  for(var i = 10; i < result.length + 10; i+=10) {
    console.log(result.slice(i - 10,i).join(' '));
  }
  rl.close()
})
function deal(M, N) {
  var prime = []
  for (var i = 1; i ; i++) {
    if(isPrime(i)) {
      prime.push(i)
    }
    if(prime.length === N) {
      break
    }
  }
  return prime.slice(M - 1)
}
//判断素数
function isPrime(n) {
  if (n < 2) {
    return false
  }
  if (n === 2) {
    return true
  } else if(n%2 === 0){
    return false
  }
  var squareRoot=Math.sqrt(n);
   for(var i=3;i<=squareRoot;i+=2) {
     if (n%i===0) {
       return false;
     };
  }
  return true;
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1013