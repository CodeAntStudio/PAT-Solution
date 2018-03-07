package wang.relish.basic._1001;
// 提交时去掉 package xxx.xxx.xxx.xxx;

import java.util.Scanner;

/**
 * https://www.patest.cn/contests/pat-b-practise/1001
 *
 * @author relish
 * @since 2018/3/2
 */
public class Main {

    private static int deal(int n) {
        int count = 0;
        while (n != 1) {
            n = n % 2 == 0 ? n / 2 : (3 * n + 1) / 2;
            count++;
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println(deal(in.nextInt()));
    }
}