// 3~69ms
#include <iostream>
#include <cstdio>
#include <vector>
using namespace std;

struct Node{
  int addr;
  int data;
  int next;
};
int main()
{
  int address, N, K;
  scanf("%d%d%d", &address, &N, &K);


  vector<Node> nodes(100000);
  for(int i = 0; i < N; ++i){
    Node node;
    scanf("%d%d%d", &node.addr, &node.data, &node.next);
    nodes[node.addr] = node;
  }

  if(address == -1){
    printf("-1\n");
  }
  else{
    vector<Node> aftersort;
    int tempAddr = address;
    while(tempAddr != -1){
      aftersort.push_back(nodes[tempAddr]);
      tempAddr = nodes[tempAddr].next;
    }

    vector<Node> final;
    int index;
    for(index = K-1;index < aftersort.size(); index += K){
      for(int j = index; j > index-K; --j){
        final.push_back(aftersort[j]);
      }
    }
    for(int j = index-K+1; j < aftersort.size(); j++){
      final.push_back(aftersort[j]);
    }
    for(int j = 0; j < final.size()-1; j++){
      final[j].next = final[j+1].addr;
    }
    for(int i = 0; i < final.size(); i++){
        if(i==final.size()-1){
            printf("%05d %d %d\n", final[i].addr, final[i].data, -1);
        }else{
            printf("%05d %d %05d\n", final[i].addr, final[i].data, final[i].next);
        }
    }
  }

  system("pause");
  return 0;
}  