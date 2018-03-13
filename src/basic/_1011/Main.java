package basic._1011;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Scanner;

/**
 * https://www.patest.cn/contests/pat-b-practise/1011
 *
 * @author relish
 * @since 2018/03/12
 */
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        for (int i = 0; i < n; i++) {
            long a = in.nextLong();
            long b = in.nextLong();
            long c = in.nextLong();
            System.out.println("Case #" + (i + 1) + ": " + (a + b > c));
        }
    }
}
