#include<stdio.h>
int main(){
    int c1, c2;
    scanf("%d %d", &c1, &c2);
    int t = (int)((c2-c1)/100.0+0.5);
    int h = t/3600;
    int m = t%3600/60;
    int s = t%60;
    printf("%02d:%02d:%02d\n",h,m,s);
    return 0;
}