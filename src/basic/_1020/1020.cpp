#include <bits/stdc++.h>
int w[1005];
int v[1005];
struct B{
    double w;//库存、正数
    double v;//总售价、正数
    double p;
};
int main(){
    int i,j,N;
    double D;
    scanf("%d %lf",&N,&D);
    struct B yb[1005];
    for(i=0;i<N;i++){
        scanf("%lf",&yb[i].w);
    }
    for(i=0;i<N;i++){
        scanf("%lf",&yb[i].v);
        yb[i].p = 1.0*(double)yb[i].v/(double)yb[i].w;
    }
    for(i=0;i<N;i++){
        for(j=0;j<N-1;j++){
            if(yb[j].p<yb[j+1].p){
                struct B t = yb[j];
                yb[j] = yb[j+1];
                yb[j+1] = t;
            }
        }
    }
    double sum = 0;
    for(i=0;D>0&&i<N;i++){
        if(yb[i].w>=D){
            sum+=yb[i].v*D/yb[i].w;
            D=0;
        }else{
            sum+=yb[i].v;
            D-=yb[i].w;
        }
    }
    printf("%.2lf\n",sum);
    return 0;
}