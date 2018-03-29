# [1025. 反转链表 (25)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  300 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

给定一个常数K以及一个单链表L，请编写程序将L中每K个结点反转。例如：给定L为1→2→3→4→5→6，K为3，则输出应该为3→2→1→6→5→4；如果K为4，则输出应该为4→3→2→1→5→6，即最后不到K个元素不反转。

**输入格式**：  
每个输入包含1个测试用例。每个测试用例第1行给出第1个结点的地址、结点总个数正整数N(<= 105)、以及正整数K(<=N)，即要求反转的子链结点的个数。结点的地址是5位非负整数，NULL地址用-1表示。

接下来有N行，每行格式为：

*Address Data Next*

其中*Address*是结点地址，*Data*是该结点保存的整数数据，*Next*是下一结点的地址。

**输出格式**：  
对每个测试用例，顺序输出反转后的链表，其上每个结点占一行，格式与输入相同。

**输入样例**：
> 00100 6 4  
> 00000 4 99999  
> 00100 1 12309  
> 68237 6 -1  
> 33218 3 00000  
> 99999 5 68237  
> 12309 2 33218  

**输出样例**：
> 00000 4 33218  
> 33218 3 12309  
> 12309 2 00100  
> 00100 1 99999  
> 99999 5 68237  
> 68237 6 -1


## 思路
先把原始数据存入一个链表(Java的话可以用Map)
然后按地址的顺序加入一个List1,
再new一个新的List2把List1的数据按规定要求排序即可。

- **C++**(3~69ms), AC。
- **Java**(87~129ms), 思路跟C/C++一致，但有一个用例超时。


### C++
```c++
// 3~69ms
#include <iostream>
#include <cstdio>
#include <vector>
using namespace std;

struct Node{
  int addr;
  int value;
  int next;
};
int main()
{
  int FirstAddr, N, K;
  scanf("%d%d%d", &FirstAddr, &N, &K);


  vector<Node> nodes(100000);
  for(int i = 0; i < N; ++i){
    Node node;
    scanf("%d%d%d", &node.addr, &node.value, &node.next);
    nodes[node.addr] = node;
  }

  if(FirstAddr == -1){
    printf("-1\n");
  }
  else{
    vector<Node> aftersort;
    int NextAddr = FirstAddr;
    while(NextAddr != -1){
      aftersort.push_back(nodes[NextAddr]);
      NextAddr = nodes[NextAddr].next;
    }

    vector<Node> final;
    int lastindex = K-1;
    while(lastindex < aftersort.size()){
      for(int i = lastindex; i > lastindex-K; --i){
        final.push_back(aftersort[i]);
      }
      lastindex += K;
    }
    for(int i = lastindex-K+1; i < aftersort.size(); ++i){
      final.push_back(aftersort[i]);
    }
    for(int i = 0; i < final.size()-1; ++i){
      final[i].next = final[i+1].addr;
    }

    int i;
    for(i = 0; i < final.size()-1; ++i){
      printf("%05d %d %05d\n", final[i].addr, final[i].value, final[i].next);
    }
    printf("%05d %d %d\n", final[i].addr, final[i].value, -1);
  }

  system("pause");
  return 0;
}
```

### Java
```java
public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String address = in.next();
        int N = in.nextInt();
        int K = in.nextInt();
        Map<String, Node> addr2Node = new HashMap<>();
        for (int i = 0; i < N; i++) {
            Node node = new Node();
            node.address = in.next();
            node.data = in.next();
            node.next = in.next();
            addr2Node.put(node.address, node);
        }

        List<Node> list = new ArrayList<>();
        for (Node x = addr2Node.get(address); x != null; x = addr2Node.get(x.next)) {
            list.add(x);
        }
        List<Node> result = new ArrayList<>();
        int i;
        for (i = 0; i < list.size(); i += K) {
            if (i + K-1 >= list.size()) {
                for (int j = i; j < list.size(); j++) {
                    Node node = list.get(j);
                    result.add(node);
                }
                break;
            }
            for (int j = i + K - 1; j >= i; j--) {
                Node node = list.get(j);
                if (j == i) {
                    if (i + K < list.size()) {
                        node.next = list.get(i + K).address;
                    } else {
                        node.next = "-1";
                    }
                } else {
                    node.next = list.get(j - 1).address;
                }
                result.add(node);
            }
        }

        for (int k = K-1; k < result.size(); k+=K) {
            if(k+1<result.size()){
                result.get(k).next = result.get(k+1).address;
            }else{
                result.get(k).next = "-1";
            }
        }


        System.out.println(Arrays.toString(result.toArray(new Node[result.size()]))
                .replaceAll(", ", "\n")
                .replaceAll("\\[|]", ""));

    }

    static class Node {
        String address;
        String data;
        String next;

        @Override
        public String toString() {
            return address + " " + data + " " + next;
        }
    }
}
```

[title]: https://www.patest.cn/contests/pat-b-practise/1025
