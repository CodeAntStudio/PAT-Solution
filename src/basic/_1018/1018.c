#include <stdio.h>
#include <string.h>
char i2c[3]={'C','J','B'};
int c2i[100];
int win=0;
int lose=0;
int sjb1[3];
int sjb2[3];
int handleData(char c1, char c2) {
    if (c1 == c2) {
        return 0;
    } else {
        if (c1 == 'C' && c2 == 'J' || c1 == 'J' && c2 == 'B' || c1 == 'B' && c2 == 'C') {
            win++;
            sjb1[c2i[c1]]++;
            return 1;
        } else {
            lose++;
            sjb2[c2i[c2]]++;
            return -1;
        }
    }
}
int main(){
    c2i['C']=0;
    c2i['J']=1;
    c2i['B']=2;
    int n,i;
    memset(sjb1,0,sizeof(sjb1));
    memset(sjb2,0,sizeof(sjb2));
    scanf("%d",&n);
    getchar();
    for(i=0;i<n;i++){
        char c1,c2;
        scanf("%c %c",&c1,&c2);
        getchar();
        handleData(c1,c2);
    }
    printf("%d %d %d\n",win,n - win - lose,lose);
    printf("%d %d %d\n",lose,n - win - lose,win);
    int max1=0,max2=0;
    char max1Char='Z',max2Char='Z';
    for (int i = 0; i < 3; i++) {
        if (sjb1[i] > max1) {
            max1 = sjb1[i];
            max1Char = i2c[i];
        } else if (sjb1[i] == max1) {
            if (i2c[i] < max1Char) {
                max1 = sjb1[i];
                max1Char = i2c[i];
            }
        }
    }
    for (int i = 0; i < 3; i++) {
        if (sjb2[i] > max2) {
            max2 = sjb2[i];
            max2Char = i2c[i];
        } else if (sjb2[i] == max2) {
            if (i2c[i] < max2Char) {
                max2 = sjb2[i];
                max2Char = i2c[i];
            }
        }
    }
    printf("%c %c\n",max1Char,max2Char);
    return 0;
}