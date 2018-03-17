# [1004. 成绩排名 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  400 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

读入n名学生的姓名、学号、成绩，分别输出成绩最高和成绩最低学生的姓名和学号。

**输入格式**：每个测试输入包含1个测试用例，格式为

  第1行：正整数n
  第2行：第1个学生的姓名 学号 成绩
  第3行：第2个学生的姓名 学号 成绩
  ... ... ...
  第n+1行：第n个学生的姓名 学号 成绩
其中姓名和学号均为不超过10个字符的字符串，成绩为0到100之间的一个整数，这里保证在一组测试用例中没有两个学生的成绩是相同的。
**输出格式**：对每个测试用例输出2行，第1行是成绩最高学生的姓名和学号，第2行是成绩最低学生的姓名和学号，字符串间有1空格。

**输入样例**：
> 3  
> Joe Math990112 89  
> Mike CS991301 100  
> Mary EE990830 95  

**输出样例**：
> Mike CS991301  
> Joe Math990112  

## 思路
无技巧, 基础题。
### Java
```java
public class Main {

    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        int n = cin.nextInt();
        String maxName = "", minName = "", maxNum = "", minNum = "";
        int minScore = 0, maxScore = 0;
        for (int i = 0; i < n; i++) {
            String name = cin.next();
            String num = cin.next();
            int score = Integer.parseInt(cin.next());
            if (i == 0) {
                maxName = name;
                maxNum = num;
                maxScore = score;
                minName = name;
                minNum = num;
                minScore = score;
            } else {
                if (score > maxScore) {
                    maxName = name;
                    maxNum = num;
                    maxScore = score;
                }
                if (score < minScore) {
                    minName = name;
                    minNum = num;
                    minScore = score;
                }
            }
        }
        System.out.println(maxName + " " + maxNum);
        System.out.println(minName + " " + minNum);
    }
}
```
### JavaScript
```JavaScript
function deal(inputs) {
  var scoreArr = []
  for (var item of inputs) {
    var arr = item.split(' ')
    scoreArr.push(arr[2])
  }
  var maxIndex = 0
  var minIndex = 0
  var maxScore = scoreArr[0]
  var minScore = scoreArr[0]
  for(var i = 1; i < scoreArr.length; i++) {
    if (+scoreArr[i] > +maxScore) {
      maxIndex = i
      maxScore = scoreArr[i]
    }
    if (+scoreArr[i] < +minScore) {
      minIndex = i
      minScore = scoreArr[i]
    }
  }
  var result = [inputs[maxIndex].split(' ').slice(0,2).join(' '), inputs[minIndex].split(' ').slice(0,2).join(' ')]
  return result
}
```

[title]: https://www.patest.cn/contests/pat-b-practise/1004
