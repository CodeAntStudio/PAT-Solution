#include <iostream>
#include <cstring>
#include <algorithm>
#include <cstdio>
#include <vector>
using namespace std;
int N,L,H;
class stu{
public:
    int num;
    int d;
    int c;
    stu(){
        num=0;
        d=0;
        c=0;
    }
    stu(int _num,int _d,int _c){
        num=_num;
        d=_d;
        c=_c;
    }
    int getType(){
        if (d >= H && c >= H) {
            return 1;
        } else if (d >= H && c < H && c >= L) {
            return 2;
        } else if (d < H && d >= L && c < H && c >= L && d >= c) {
            return 3;
        } else {
            return 4;
        }
    }
    bool operator>(stu &s){
        if(getType()!=s.getType()){
            return getType()<s.getType();
        }else{
            if(c+d!=s.c+s.d){
                return c+d>s.c+s.d;
            }else{
                if(d!=s.d){
                    return d>s.d;
                }else{
                    return num<s.num;
                }
            }
        }
    }
};
bool cmp(stu s1,  stu s2){
    return s1>s2;
}
int main(){
    stu s1(101,80,80),s2(102,80,80);
    int i,count=0;
    scanf("%d %d %d",&N,&L,&H);
    vector<stu> stus;
    for(i=0;i<N;i++){
        int num,d,c;
        scanf("%d %d %d",&num,&d,&c);
        if(d<L||c<L){
            continue;
        }
        stu s(num,d,c);
        count++;
        stus.push_back(s);
    }
    sort(stus.begin(),stus.end(), cmp);
    cout<<count<<endl;
    for(int i=0;i<count;i++){
        printf("%d %d %d\n",stus[i].num,stus[i].d,stus[i].c);
    }
    return 0;
}