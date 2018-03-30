//1~2ms
#include <iostream>
#include <cstdio>
#include <map>
#include <algorithm>
#include <cmath>
using namespace std;
int main() {
	int n1,n2;
	scanf("%d",&n1);
	map<int,double> _map;
	for(int i=0;i<n1;i++){
		pair<int,double> x;
		scanf("%d %lf",&x.first,&x.second);
		_map.insert(x);
	}
	scanf("%d",&n2);
	for (int i=0;i<n2;i++) {
		int p;
		double a;
		scanf("%d %lf",&p,&a);
		map<int,double>::iterator _it = _map.find(p);
		if(_it==_map.end()){
			pair<int,double> x;
			x.first = p;
			x.second = a;
			_map.insert(x);
		}else{
			double t = _it->second;
			if(abs(t+a)<0.01){
				_map.erase(p);
			}else{
				_map[p] = t+a;
			}
		}
	}
	map<int, double>::iterator it;
	int arr[_map.size()];
	int i = 0;
	for(it=_map.begin();it!=_map.end();it++,i++){
		arr[i]=it->first;
	}
	sort(arr,arr+_map.size());
	printf("%lu",_map.size());
	for(int i = _map.size()-1;i>=0;i--){
		printf(" %d %.1lf",arr[i],_map[arr[i]]);
	}
	return 0;
}