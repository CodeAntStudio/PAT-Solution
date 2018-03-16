#include<iostream>
#include<cstring>
#include<cstdio>
#include<ctime>
#include<algorithm>
using namespace std;

bool visit[10100000];
int prime[10050];

void init_prim(int n){
    memset(visit, true, sizeof(visit));
    int num = 0;
    for (int i = 2; num <= n; ++i){
        if (visit[i] == true){
            num++;
            prime[num] = i;
        }
        for (int j = 1; ((j <= num) && (i * prime[j] <= 10100000));  ++j){
            visit[i * prime[j]] = false;
            if (i % prime[j] == 0) break;
        }
    }
}

int main()
{
    memset(prime, 0, sizeof(prime));
    int n,m;
    cin>>m;
    cin>>n;
    init_prim(n);
    for(int i = m,j=1; i <= n; ++i,j++){
        if(j%10==0||i==n){
            cout<<prime[i]<<endl;
        }else{
            cout<<prime[i]<<" ";
        }
    }
    return 0;
}