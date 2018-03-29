# [1001. A+B Format (20)][title]
| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  400 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

Calculate a + b and output the sum in standard format -- that is, the digits must be separated into groups of three by commas (unless there are less than four digits).

**Input**:

Each input file contains one test case. Each case contains a pair of integers a and b where -1000000 <= a, b <= 1000000. The numbers are separated by a space.

**Output**：
For each test case, you should output the sum of a and b in one line. The sum must be written in the standard format.

**Sample Input**：
> -1000000 9

**Sample Output**：
> -999,991

## 思路
无。

- **C**(1~3ms), AC。
- **Java**(85~147ms), AC。

### C
```
#include <stdio.h>
#include <string.h>
void f(char sum[], int index) {
	if (index == strlen(sum)) return;
	f(sum, index + 1);
	if (index % 3 == 2) {
		if ((!(index == strlen(sum) - 2 && sum[strlen(sum) - 1] == '-')) && index != strlen(sum) - 1) {
			printf(",");
		}
	}
	printf("%c",sum[index]);
}
int main() {
	int a,b;
	scanf("%d %d",&a,&b);
	char sum[10];
	sprintf(sum, "%d", a+b);
	char newSum[10];
	int i,j;
	for(i = 0,j = strlen(sum)-1;i<strlen(sum);i++,j--){
		newSum[i]=sum[j];
	}
	newSum[i]='\0';
	f(newSum,0);
	return 0;
}
```

### Java
方法一(85~93ms): 递归倒序输出,顺便插入逗号
```
/**
 * @param sum   倒序的字符数组
 * @param index 当前数组下表
 */
private static void f(char[] sum, int index) {
    if (index == sum.length) return;
    f(sum, index + 1);
    if (index % 3 == 2) {
        if ((!(index == sum.length - 2 && sum[sum.length - 1] == '-')) && index != sum.length - 1) {
            System.out.printf(",");
        }
    }
    System.out.printf(sum[index] + "");
}
```
方法二(107~147): 使用DecimalFormat格式化数字
```
DecimalFormat df = new DecimalFormat("###,###,###");
System.out.println(df.format(a+b));
```

[title]: https://www.patest.cn/contests/pat-a-practise/1001
