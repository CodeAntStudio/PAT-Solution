#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int cmp(const void *a, const void *b){
     return (*(int *)a - *(int *)b);
}
int main() {
	int n,p;
	scanf("%d %d", &n, &p);
	int arr[n];
	for (int i = 0; i < n; i++) {
		scanf("%d", arr + i);
	}
	qsort(arr, n, sizeof(arr[0]), cmp);
	int max = 1;
	for(int j = 0; j< n; j++){
		for (int i = j+max; i < n; i++) {
			if (arr[i]*1.0/p <= arr[j]*1.0) {
				if(max<i-j+1){
					max = i-j+1;
				}
			}else break;
		}
	}
	printf("%d",max);
	return 0;
}