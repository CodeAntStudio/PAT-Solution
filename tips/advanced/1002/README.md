# [1002. A+B for Polynomials (25)][title]
| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  400 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

This time, you are supposed to find A+B where A and B are two polynomials.

**Input**:

Each input file contains one test case. Each case occupies 2 lines, and each line contains the information of a polynomial: K N1 a<sub>N1</sub> N2 a<sub>N2</sub> ... NK a<sub>NK</sub>, where K is the number of nonzero terms in the polynomial, Ni and a<sub>Ni</sub> (i=1, 2, ..., K) are the exponents and coefficients, respectively. It is given that 1 <= K <= 10，0 <= NK < ... < N2 < N1 <=1000.

**Output**：
For each test case you should output the sum of A and B in one line, with the same format as the input. Notice that there must be NO extra space at the end of each line. Please be accurate to 1 decimal place.

**Sample Input**：
> 2 1 2.4 0 3.2
> 2 2 1.5 1 0.5

**Sample Output**：
> 3 2 1.5 1 2.9 0 3.2

## 思路
第一步：第一行数据往map里塞，
第二步：第二行数据分两种情况:1 map里不存在key的,直接塞；2 map里存在key的,再分两种情况(2.1 相加后为0,从map里移除这个key；2.2相加后不为0，修改map里key对应的value值)
第三部：所有key从大到小排序
第四部：打印结果

注: 如果两个多项式相加刚好为0,则直接输出"0",不能输出"0 "。即0后面没有空格。

- **C**(1~2ms), AC。
- **Java**(112~126ms), AC。

### C
```
//1~2ms
#include <iostream>
#include <cstdio>
#include <map>
#include <algorithm>
#include <cmath>
using namespace std;
int main() {
	int n1,n2;
	scanf("%d",&n1);
	map<int,double> _map;
	for(int i=0;i<n1;i++){
		pair<int,double> x;
		scanf("%d %lf",&x.first,&x.second);
		_map.insert(x);
	}
	scanf("%d",&n2);
	for (int i=0;i<n2;i++) {
		int p;
		double a;
		scanf("%d %lf",&p,&a);
		map<int,double>::iterator _it = _map.find(p);
		if(_it==_map.end()){
			pair<int,double> x;
			x.first = p;
			x.second = a;
			_map.insert(x);
		}else{
			double t = _it->second;
			if(abs(t+a)<0.01){
				_map.erase(p);
			}else{
				_map[p] = t+a;
			}
		}
	}
	map<int, double>::iterator it;
	int arr[_map.size()];
	int i = 0;
	for(it=_map.begin();it!=_map.end();it++,i++){
		arr[i]=it->first;
	}
	sort(arr,arr+_map.size());
	printf("%lu",_map.size());
	for(int i = _map.size()-1;i>=0;i--){
		printf(" %d %.1lf",arr[i],_map[arr[i]]);
	}
	return 0;
}
```

### Java
```
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n1 = in.nextInt();
        Map<Integer, Double> map = new HashMap<>();
        for (int i = 0; i < n1; i++) {
            int p = in.nextInt();
            map.put(p, in.nextDouble());
        }

        int n2 = in.nextInt();

        for (int i = 0; i < n2; i++) {
            int p = in.nextInt();
            double a = in.nextDouble();
            Double aDouble = map.get(p);
            if (aDouble == null) {
                map.put(p, a);
            } else {
                double r = aDouble + a;
                if (Math.abs(r) < 0.01) {
                    map.remove(p);
                } else {
                    map.put(p, r);
                }
            }
        }
        List<Integer> indexs = new ArrayList<>(map.keySet());
        Collections.sort(indexs);
        Collections.reverse(indexs);

        System.out.printf(indexs.size() + "");
        for (Integer p : indexs) {
            System.out.printf(" " + p + " " + String.format(Locale.ENGLISH, "%.1f", map.get(p)));
        }
    }
}
```

[title]: https://www.patest.cn/contests/pat-a-practise/1002
