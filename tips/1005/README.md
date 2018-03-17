# [1004. 成绩排名 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  400 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

卡拉兹(Callatz)猜想已经在1001中给出了描述。在这个题目里，情况稍微有些复杂。

当我们验证卡拉兹猜想的时候，为了避免重复计算，可以记录下递推过程中遇到的每一个数。例如对n=3进行验证的时候，我们需要计算3、5、8、4、2、1，则当我们对n=5、8、4、2进行验证的时候，就可以直接判定卡拉兹猜想的真伪，而不需要重复计算，因为这4个数已经在验证3的时候遇到过了，我们称5、8、4、2是被3“覆盖”的数。我们称一个数列中的某个数n为“关键数”，如果n不能被数列中的其他数字所覆盖。

现在给定一系列待验证的数字，我们只需要验证其中的几个关键数，就可以不必再重复验证余下的数字。你的任务就是找出这些关键数字，并按从大到小的顺序输出它们。

**输入格式**：  
每个测试输入包含1个测试用例，第1行给出一个正整数K(<100)，第2行给出K个互不相同的待验证的正整数n(1<n<=100)的值，数字间用空格隔开。

**输出格式**：  
每个测试用例的输出占一行，按从大到小的顺序输出关键数字。数字间用1个空格隔开，但一行中最后一个数字后没有空格。

**输入样例**：
> 6  
> 3 5 6 7 8 11  

**输出样例**：
> 7 6


## 思路
题目的意思简而言之就是，**找出这一组数里面不被其他数"覆盖"的数，并从大到小输出**。

比如: 被3覆盖的数有：5、8、4、2、1  

比如：
这组数: 3、5、6、7、8、11
被3覆盖的数有: 5、8、4、2、1  
被5覆盖的数有: 8、4、2、1  
被6覆盖的数有: 3、8、4、2、1  
被7覆盖的数有: 11、17、26、13、20、10、5、8、4、2、1    
被8覆盖的数有: 4、2、1  
被8覆盖的数有: 17、26、13、20、10、5、8、4、2、1  

所有被覆盖的数求**并集**：1、2、3、4、5、8、10、11、13、17、20、26  
再判断这组数(3、4、6、7)里有哪些数不在最后求得的**并集**里  
发现有6、7这些数  
最后排个序, 输出`7 6`


### 1 搜集某个数覆盖的数
```java
public class Main {
    private static Set<Integer> set = new HashSet<>();
    /**
     * collect all digits covered by {@code n}
     * and put covered digits into a set
     */
    private static void coveredDigitCollection(int n) {
        if (n == 1) return;
        n = n % 2 == 0 ? n / 2 : (3 * n + 1) / 2;
        set.add(n);
        coveredDigitCollection(n);
    }
}
```

### 2 找出不被覆盖的数, 并排序
```java
public class Main{
    private static List<Integer> deal(int[] arr) {
        for (int d : arr) {
            coveredDigitCollection(d);
        }
        List<Integer> result = new ArrayList<>();
        for (int d : arr) {
            if (!set.contains(d)) {
                result.add(d);
            }
        }
        Collections.sort(result);
        Collections.reverse(result);
        return result;
    }
}
```
[title]: https://www.patest.cn/contests/pat-b-practise/1005
