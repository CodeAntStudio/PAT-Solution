#include <stdio.h>
#include <string.h>

int getMonthDayCount(int y, int m) {
	return m == 2 ?
			(((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) ? 29 : 28)
			: (m < 8 ^ m % 2 == 0 ? 31 : 30);
}

int isDayCorrect(int year, int month, int day) {
	return month >= 1 && month <= 12 && getMonthDayCount(year, month) >= day && day >= 1;
}

int isDateCorrect(int y,int m,int d) {
	char date[11];
	sprintf(date,"%04d/%02d/%02d",y,m,d);
	return strcmp(date,"2014/09/06") <= 0 && strcmp(date,"1814/09/06") >= 0 && isDayCorrect(y, m, d);
}

int main(){
	int n,y,m,d;
	char name[6];
	char date[11];
	char oldestName[6] = "";
	char youngestName[6] = "";
	char oldestAge[11] = "2014/09/07";
	char youngestAge[11] = "1814/09/05";
	int count = 0;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		scanf("%s",name);
		scanf("%d/%d/%d",&y,&m,&d);
		sprintf(date,"%04d/%02d/%02d",y,m,d);
		if (isDateCorrect(y,m,d)) {
			count++;
			if (strcmp(date,oldestAge) < 0) {
				strcpy(oldestAge, date);
				strcpy(oldestName, name);
			}
			if (strcmp(date,youngestAge) > 0) {
				strcpy(youngestAge, date);
				strcpy(youngestName, name);
			}
		}
	}
	printf("%d",count);
	if(strlen(oldestName)>0){
		printf(" %s",oldestName);
	}
	if(strlen(oldestName)>0){
		printf(" %s",youngestName);
	}
	return 0;
}