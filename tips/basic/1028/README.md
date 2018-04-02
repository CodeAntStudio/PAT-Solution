# [1028. 人口普查(20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  200 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

某城镇进行人口普查，得到了全体居民的生日。现请你写个程序，找出镇上最年长和最年轻的人。

这里确保每个输入的日期都是合法的，但不一定是合理的——假设已知镇上没有超过200岁的老人，而今天是2014年9月6日，所以超过200岁的生日和未出生的生日都是不合理的，应该被过滤掉。

**输入格式**：  

输入在第一行给出正整数N，取值在(0, 10<sup>5</sup>]；随后N行，每行给出1个人的姓名（由不超过5个英文字母组成的字符串）、以及按“yyyy/mm/dd”（即年/月/日）格式给出的生日。题目保证最年长和最年轻的人没有并列。

**输出格式**：  

在一行中顺序输出有效生日的个数、最年长人和最年轻人的姓名，其间以空格分隔。

**输入样例**：
> 5  
> John 2001/05/12  
> Tom 1814/09/06  
> Ann 2121/01/30  
> James 1814/09/05  
> Steve 1967/11/20

**输出样例**：
> 3 Tom John


## 思路
主要在时间判断上,  
首先判断是否在1814/09/06~2014/09/06之间，  
再判断日期的正确性(比如2011/02/29就是不正确的)。

- **C**(1~105ms),一共5个测试点，前4个1ms通过，第5个105ms.
- **Java**(87~102ms),第5个测试点超时,未AC就不贴代码了。

### C
```c
#include <stdio.h>
#include <string.h>

int getMonthDayCount(int y, int m) {
	return m == 2 ?
			(((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) ? 29 : 28)
			: (m < 8 ^ m % 2 == 0 ? 31 : 30);
}

int isDayCorrect(int year, int month, int day) {
	return month >= 1 && month <= 12 && getMonthDayCount(year, month) >= day && day >= 1;
}

int isDateCorrect(int y,int m,int d) {
	char date[11];
	sprintf(date,"%04d/%02d/%02d",y,m,d);
	return strcmp(date,"2014/09/06") <= 0 && strcmp(date,"1814/09/06") >= 0 && isDayCorrect(y, m, d);
}

int main(){
	int n,y,m,d;
	char name[6];
	char date[11];
	char oldestName[6] = "";
	char youngestName[6] = "";
	char oldestAge[11] = "2014/09/07";
	char youngestAge[11] = "1814/09/05";
	int count = 0;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		scanf("%s",name);
		scanf("%d/%d/%d",&y,&m,&d);
		sprintf(date,"%04d/%02d/%02d",y,m,d);
		if (isDateCorrect(y,m,d)) {
			count++;
			if (strcmp(date,oldestAge) < 0) {
				strcpy(oldestAge, date);
				strcpy(oldestName, name);
			}
			if (strcmp(date,youngestAge) > 0) {
				strcpy(youngestAge, date);
				strcpy(youngestName, name);
			}
		}
	}
	printf("%d",count);
	if(strlen(oldestName)>0){
		printf(" %s",oldestName);
	}
	if(strlen(oldestName)>0){
		printf(" %s",youngestName);
	}
	return 0;
}
```

[title]: https://www.patest.cn/contests/pat-b-practise/1028
