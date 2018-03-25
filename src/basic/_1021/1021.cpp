#include<bits/stdc++.h>
int main(){
    char c[1005];
    scanf("%s",c);
    int n[10];
    memset(n,0,sizeof(n));
    int start = -1;
    for(int i=0;i<strlen(c);i++){
        if(c[i]!='0'){
            start=i;
            break;
        }
    }
    if(start==-1){
        printf("0:0\n");
        return 0;
    }
    for (int i = start; i < strlen(c); i++) {
        n[c[i]-'0']++;
    }
    for (int i = 0; i < 10; i++) {
        if(n[i]!=0){
            printf("%d:%d\n",i,n[i]);
        }
    }
    return 0;
}