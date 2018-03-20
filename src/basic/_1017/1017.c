#include <stdio.h>
#include <string.h>
void f(char s[], int n) {
    int i,r[strlen(s)];
    int m = 0;
    for (int i = 0; i < strlen(s); i++) {
        r[i] = (m * 10 + s[i] - '0') / n;
        m = (m * 10 + s[i] - '0') % n;
    }
    int start = 0;
    for(i=0; i<strlen(s);i++){
        if(r[i]!=0){
            start=i;
            break;
        }
    }
    for(i=start;i<strlen(s);i++){
        printf("%d",r[i]);
    }
    printf(" %d\n",m);
}
int main(){
    char s[1005];
    int n;
    scanf("%s %d",s,&n);
    f(s,n);
    return 0;
}