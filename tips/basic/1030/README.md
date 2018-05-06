# [1030. 完美数列(25)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  300 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

给定一个正整数数列，和正整数p，设这个数列中的最大值是M，最小值是m，如果M <= m * p，则称这个数列是完美数列。

现在给定参数p和一些正整数，请你从中选择尽可能多的数构成一个完美数列。

**输入格式**：  

输入第一行给出两个正整数N和p，其中N（<= 10<sup>5</sup>）是输入的正整数的个数，p（<= 10<sup>9</sup>）是给定的参数。第二行给出N个正整数，每个数不超过10<sup>9</sup>。

**输出格式**：  

在一行中输出最多可以选择多少个数可以用它们组成一个完美数列。

**输入样例**：
> 10 8  
> 2 3 20 4 5 1 6 7 8 9

**输出样例**：
> 8


## 思路
排序, 最值。

- **C**(1~27ms),AC。

### C
```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int cmp(const void *a, const void *b){
     return (*(int *)a - *(int *)b);
}
int main() {
	int n,p;
	scanf("%d %d", &n, &p);
	int arr[n];
	for (int i = 0; i < n; i++) {
		scanf("%d", arr + i);
	}
	qsort(arr, n, sizeof(arr[0]), cmp);
	int max = 1;
	for(int j = 0; j< n; j++){
		for (int i = j+max; i < n; i++) {
			if (arr[i]*1.0/p <= arr[j]*1.0) {
				if(max<i-j+1){
					max = i-j+1;
				}
			}else break;
		}
	}
	printf("%d",max);
	return 0;
}
```

[title]: https://www.patest.cn/contests/pat-b-practise/1030
