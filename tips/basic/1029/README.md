# [1029. 旧键盘(20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  200 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。现在给出应该输入的一段文字、以及实际被输入的文字，请你列出肯定坏掉的那些键。

**输入格式**：  

输入在2行中分别给出应该输入的文字、以及实际被输入的文字。每段文字是不超过80个字符的串，由字母A-Z（包括大、小写）、数字0-9、以及下划线“_”（代表空格）组成。题目保证2个字符串均非空。

**输出格式**：  

按照发现顺序，在一行中输出坏掉的键。其中英文字母只输出大写，每个坏键只输出一次。题目保证至少有1个坏键。

**输入样例**：
> 7_This_is_a_test  
> _hs_s_a_es

**输出样例**：
> 7TI


## 思路
循环。去重。

- **Java**(84~85ms),AC。

### Java
```java
public class Main {
    private static String[] deal(String str1, String str2) {
        char[] source = str1.toCharArray();
        char[] output = str2.toCharArray();
        List<String> characters = new ArrayList<>();
        for (int i = 0, j = 0; i < source.length; i++) {
            char c = source[i];
            if (j < output.length && c == output[j]) {
                j++;
            } else {
                char uc = Character.toUpperCase(c);
                if (!characters.contains(uc + "")) {
                    characters.add(uc + "");
                }
            }
        }
        return characters.toArray(new String[characters.size()]);
    }
}
```

[title]: https://www.patest.cn/contests/pat-b-practise/1029
