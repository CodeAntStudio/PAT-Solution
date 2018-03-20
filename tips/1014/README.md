# [1014. 福尔摩斯的约会 (20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  100 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

大侦探福尔摩斯接到一张奇怪的字条：“我们约会吧！ 3485djDkxh4hhGE 2984akDfkkkkggEdsb s&hgsfdk d&Hyscvnm”。大侦探很快就明白了，字条上奇怪的乱码实际上就是约会的时间“星期四 14:04”，因为前面两字符串中第1对相同的大写英文字母（大小写有区分）是第4个字母'D'，代表星期四；第2对相同的字符是'E'，那是第5个英文字母，代表一天里的第14个钟头（于是一天的0点到23点由数字0到9、以及大写字母A到N表示）；后面两字符串第1对相同的英文字母's'出现在第4个位置（从0开始计数）上，代表第4分钟。现给定两对字符串，请帮助福尔摩斯解码得到约会的时间。

**输入格式**：  
输入在4行中分别给出4个非空、不包含空格、且长度不超过60的字符串。

**输出格式**：  
在一行中输出约会的时间，格式为“DAY HH:MM”，其中“DAY”是某星期的3字符缩写，即MON表示星期一，TUE表示星期二，WED表示星期三，THU表示星期四，FRI表示星期五，SAT表示星期六，SUN表示星期日。题目输入保证每个测试存在唯一解。

**输入样例**：
> 3485djDkxh4hhGE  
> 2984akDfkkkkggEdsb  
> s&hgsfdk  
> d&Hyscvnm  

**输出样例**：
> THU 14:04

## 思路
无特殊技巧。题目本身没有难度。

- **C**(1ms), AC
- **JavaScript**(53~63ms), AC。
- **Java**(96ms~99ms), 有两个用例超时

### C
```c
#include<stdio.h>
#include<string.h>
int main(){
    char days[7][4]={"MON","TUE","WED","THU","FRI","SAT","SUN"};
    char s1[80],s2[80],s3[80],s4[80];
    scanf("%s%s%s%s",s1,s2,s3,s4);
    int week = -1;
    int hour = -1;
    int count = 0;

    int len12 = strlen(s1) > strlen(s2) ? strlen(s2) : strlen(s1);
    for (int i = 0; i < len12; i++) {
        if (s1[i] == s2[i]) {
            if (count == 0) {
                if (s1[i] >= 'A' && s1[i] <= 'G') {
                    week = s1[i] - 'A';
                    count++;
                }
            } else {
                if (s1[i] >= 'A' && s1[i] <= 'N') {
                    hour = s1[i] - 'A' + 10;
                    break;
                } else if (s1[i] >= '0' && s1[i] <= '9') {
                    hour = s1[i] - '0';
                    break;
                }
            }
        }
    }

    int min = -1;
    int len34 = strlen(s3) > strlen(s4)? strlen(s4) : strlen(s3);
    for (int i = 0; i < len34; i++) {
        if (s3[i] == s4[i] && (s3[i] >= 'a' && s3[i] <= 'z' || s3[i] >= 'A' && s3[i] <= 'Z')) {
            min = i;
            break;
        }
    }
    printf("%s %02d:%02d\n",days[week],hour,min);
    return 0;
}
```

### JavaScript
javascript的 **parseInt** 的第二个参数可以是进制数,所以可以通过parseInt进行字母和数字的转换
```javascript
parseInt('D', 16) // 13
```

```javascript
function deal(str1,str2,str3,str4) {
  var week = ''
  var hours = ''
  var minute = ''
  for(var i = 0 ; i < Math.min(str1.length,str2.length); i++) {
    if (str1.charAt(i) === str2.charAt(i) && /[A-G]/.test(str1.charAt(i))) {
      week = str1.charAt(i)
      var j = i
      break
    }
  }
  for(var i = j+1 ; i < Math.min(str1.length,str2.length); i++) {
    if (str1.charAt(i) === str2.charAt(i) && /[A-N0-9]/.test(str1.charAt(i))) {
      hours = str1.charAt(i)
      break
    }
  }
  for(var i = 0 ; i < Math.min(str3.length,str4.length); i++) {
    if (str3.charAt(i) === str4.charAt(i) && /[a-zA-Z]/.test(str3.charAt(i))) {
      minute = i
      break
    }
  }
  var weekArr1 = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  week = weekArr1[(parseInt((week+''), 17) + '').split('')[1]]
  hours = (parseInt(hours, 24) < 10 ?('0' + parseInt(hours, 24)):parseInt(hours, 24))
  minute = (minute < 10 ?('0' + minute):minute)
  return week+ ' '+hours + ':'+minute
}
```

### JavaScript
```java
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        char[] s1 = in.next().toCharArray();
        char[] s2 = in.next().toCharArray();
        char[] s3 = in.next().toCharArray();
        char[] s4 = in.next().toCharArray();

        int week = -1;
        int hour = -1;
        int count = 0;

        int len12 = s1.length > s2.length ? s2.length : s1.length;
        for (int i = 0; i < len12; i++) {
            if (s1[i] == s2[i]) {
                if (count == 0) {
                    if (s1[i] >= 'A' && s1[i] <= 'G') {
                        week = s1[i] - 'A';
                        count++;
                    }
                } else {
                    if (s1[i] >= 'A' && s1[i] <= 'N') {
                        hour = s1[i] - 'A' + 10;
                        break;
                    } else if (s1[i] >= '0' && s1[i] <= '9') {
                        hour = s1[i] - '0';
                        break;
                    }
                }
            }
        }

        int min = -1;
        int len34 = s3.length > s4.length ? s4.length : s3.length;
        for (int i = 0; i < len34; i++) {
            if (s3[i] == s4[i] && (s3[i] >= 'a' && s3[i] <= 'z' || s3[i] >= 'A' && s3[i] <= 'Z')) {
                min = i;
                break;
            }
        }
        String[] _WEEK = {"MON", "TUE", "WED", "THU", "FIR", "SAT", "SUN"};
        String weekStr = _WEEK[week];
        System.out.format(Locale.ENGLISH, "%s %02d:%02d\n", weekStr, hour, min);
    }
}
```

[title]: https://www.patest.cn/contests/pat-b-practise/1014
