# [1009. 说反话 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  400 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

给定一句英语，要求你编写程序，将句中所有单词的顺序颠倒输出。

**输入格式**：  
测试输入包含一个测试用例，在一行内给出总长度不超过80的字符串。字符串由若干单词和若干空格组成，其中单词是由英文字母（大小写有区分）组成的字符串，单词之间用1个空格分开，输入保证句子末尾没有多余的空格。

**输出格式**：  
每个测试用例的输出占一行，输出倒序后的句子。

**输入样例1**：
> Hello World Here I Come

**输出样例1**：
> Come I Here World Hello

## 思路
无特殊技巧。**循环**、**数组**。
```java
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String[] strs = in.nextLine().split(" ");
        for (int i = strs.length - 1; i > 0; i--) {
            System.out.print(strs[i] + " ");
        }
        System.out.println(strs[0]);
    }
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1009