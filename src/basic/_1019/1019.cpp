#include <cstdio>
#include <cstring>
#include <algorithm>
#include <iostream>
#include <cmath>
#include <string>
using namespace std;
int c2i(char c[]){
    int sum=0;
    for(int i=0;i<strlen(c);i++){
        sum=sum*10+c[i]-'0';
    }
    return sum;
}
void i2c(int n,char* c){
    int k=0,i,j;
    do{
        c[k++]=n%10+'0';
        n=n/10;
    }while(n);
    c[k]='\0';
    char cc[4];
    if(k<4){
        for(i=k-1,j=3;i>=0;i--,j--){
            cc[j]=c[i];
        }
        for(i=0;i<4-k;i++){
            cc[j]='0';
        }
        cc[4]='\0';
        strcpy(c,cc);
    }
}
void f(char c[]){
    int i,j;
    for(i=0;i<4;i++){
        for(j=0;j<3;j++){
            if(c[j]<c[j+1]){
                char t = c[j];
                c[j]=c[j+1];
                c[j+1]=t;
            }
        }
    }
    int n1 = c2i(c);
    string cc = c;
    reverse(cc.begin(),cc.begin()+4);
    char _c[4];
    strcpy(_c,cc.c_str());
    int n2 = c2i(_c);
    int r = n1-n2;
    printf("%04d - %04d = %04d\n",n1,n2,r);
    if(r==0||r==6174){
        getchar();
        return;
    }
    i2c(r,_c);
    f(_c);
}
int main(){
    char c[]="0316";
    int n;
    while(scanf("%s",c)!=EOF){
        if(strlen(c)<4){
            string cc;
            for(int i=0;i<4-strlen(c);i++){
                cc+="0";
            }
            cc+=c;
            strcpy(c,cc.c_str());
        }
        f(c);
    }
    return 0;
}