#include<stdio.h>
#include<string.h>
int main(){
    char days[7][4]={"MON","TUE","WED","THU","FRI","SAT","SUN"};
    char s1[80],s2[80],s3[80],s4[80];
    scanf("%s%s%s%s",s1,s2,s3,s4);
    int week = -1;
    int hour = -1;
    int count = 0;

    int len12 = strlen(s1) > strlen(s2) ? strlen(s2) : strlen(s1);
    for (int i = 0; i < len12; i++) {
        if (s1[i] == s2[i]) {
            if (count == 0) {
                if (s1[i] >= 'A' && s1[i] <= 'G') {
                    week = s1[i] - 'A';
                    count++;
                }
            } else {
                if (s1[i] >= 'A' && s1[i] <= 'N') {
                    hour = s1[i] - 'A' + 10;
                    break;
                } else if (s1[i] >= '0' && s1[i] <= '9') {
                    hour = s1[i] - '0';
                    break;
                }
            }
        }
    }

    int min = -1;
    int len34 = strlen(s3) > strlen(s4)? strlen(s4) : strlen(s3);
    for (int i = 0; i < len34; i++) {
        if (s3[i] == s4[i] && (s3[i] >= 'a' && s3[i] <= 'z' || s3[i] >= 'A' && s3[i] <= 'Z')) {
            min = i;
            break;
        }
    }
    printf("%s %02d:%02d\n",days[week],hour,min);
    return 0;
}