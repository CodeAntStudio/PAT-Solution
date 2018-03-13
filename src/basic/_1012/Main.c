// 0~3ms
#include<stdio.h>
int main(){
    int num, n, i,A1=0,A2=0,A2Count=0,A3=0,A4Count=0,A5=0;
    double A4 = 0.0;
    scanf("%d", &num);
    for (i = 0; i < num; i++) {
        scanf("%d",&n);
        A1 += n % 10 == 0 ? n : 0;
        A2Count += n % 5 == 1 ? 1 : 0;
        A2 += n % 5 == 1 ? (A2Count % 2 == 1 ? 1 : -1) * n : 0;
        A3 += n % 5 == 2 ? 1 : 0;
        A4Count += n % 5 == 3 ? 1 : 0;
        A4 += n % 5 == 3 ? n : 0;
        A5 = n % 5 == 4 && n > A5 ? n : A5;
    }
    if(A1 != 0) printf("%d ",A1);
    else printf("N ");
    if(A2Count != 0) printf("%d ",A2);
    else printf("N ");
    if(A3 != 0) printf("%d ",A3);
    else printf("N ");
    if(A4Count != 0) printf("%.1lf ",A4 / A4Count);
    else printf("N ");
    if(A5 != 0) printf("%d",A5);
    else printf("N");
}