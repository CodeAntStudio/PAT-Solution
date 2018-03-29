#include <stdio.h>
#include <string.h>
void f(char sum[], int index) {
	if (index == strlen(sum)) return;
	f(sum, index + 1);
	if (index % 3 == 2) {
		if ((!(index == strlen(sum) - 2 && sum[strlen(sum) - 1] == '-')) && index != strlen(sum) - 1) {
			printf(",");
		}
	}
	printf("%c",sum[index]);
}
int main() {
	int a,b;
	scanf("%d %d",&a,&b);
	char sum[10];
	sprintf(sum, "%d", a+b);
	char newSum[10];
	int i,j;
	for(i = 0,j = strlen(sum)-1;i<strlen(sum);i++,j--){
		newSum[i]=sum[j];
	}
	newSum[i]='\0';
	f(newSum,0);
	return 0;
}