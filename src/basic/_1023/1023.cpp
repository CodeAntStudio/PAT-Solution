#include <bits/stdc++.h>
using namespace std;
int main(){
    int r[55];
    int _0;
    int num=0;
    memset(r,-1,sizeof(r));
    scanf("%d",&_0);
    for(int i = 1;i < 10; i++){
        int n;
        scanf("%d",&n);
        if(_0!=0&&n!=0){
            r[num++]=i;
            for(int j=0;j<_0;j++){
                r[num++] = 0;
            }
            for(int j=0;j<n-1;j++){
                r[num++]=i;
            }
            _0=0;
            continue;
        }
        if(n!=0){
            for(int j=0;j<n;j++){
                r[num++]=i;
            }
        }
    }
    for(int i=0;i<num;i++){
        printf("%d",r[i]);
    }
    return 0;
}