package wang.relish.basic._1001;
// 提交时去掉 package wang.relish.basic._1001;

import java.util.Scanner;

/**
 * 1001. 害死人不偿命的(3n+1)猜想 (15)
 * https://www.patest.cn/contests/pat-b-practise/1001
 * Created by Relish on 2016/8/4.
 */
public class Main {

    private static int f(int n, int count) {
        if (n == 1) {
            return count;
        } else if (n % 2 == 0) {
            return f(n / 2, count + 1);
        } else {
            return f((3 * n + 1) / 2, count + 1);
        }
    }

    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        System.out.println(f(cin.nextInt(), 0));
    }
}