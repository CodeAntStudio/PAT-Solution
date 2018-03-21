#include <stdio.h>
#include <math.h>
#include <string.h>
int l(int n){
    if(n==0){
        return 1;
    }
    int s =0 ;
    while(n!=0){
        n/=10;
        s++;
    }
    return s;
}
char* itoa(int num,char*str,int radix){/*索引表*/
    char index[]="0123456789ABCDEF";
    unsigned unum;/*中间变量*/
    int i=0,j,k;
    /*确定unum的值*/
    if(radix==10&&num<0){/*十进制负数*/
        unum=(unsigned)-num;
        str[i++]='-';
    }
    else
        unum=(unsigned)num;/*其他情况*/
    /*转换*/
    do{
        str[i++]=index[unum%(unsigned)radix];
        unum/=radix;
    }while(unum);
    str[i]='\0';
    /*逆序*/
    if(str[0]=='-')
        k=1;/*十进制负数*/
    else
        k=0;
    char temp;
    for(j=k;j<=(i-1)/2;j++){
        temp=str[j];
        str[j]=str[i-1+k-j];
        str[i-1+k-j]=temp;
    }
    return str;
}
int p(int a, int d) {
    int sum = 0;
    int n = 0;
    char c[11];
    itoa(a,c,10);
    for (int i = 0; i < strlen(c); i++) {
        if(c[i]-'0'==d){
            sum=sum*10+d;
        }
    }
    return sum;
}
int main(){
    int A,DA,B,DB;
    scanf("%d %d %d %d",&A,&DA,&B,&DB);
    printf("%d\n",p(A,DA)+p(B,DB));
    return 0;
}