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
无特殊技巧。题目本身没有难度。


- **JavaScript**(53~54ms), AC。



### JavaScript
```javascript
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
[title]: https://www.patest.cn/contests/pat-b-practise/1016
