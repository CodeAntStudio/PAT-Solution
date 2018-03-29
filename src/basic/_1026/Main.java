package basic._1026;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Scanner;

/**
 * @author relish
 * @since 2018/03/29
 */

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int c1 = in.nextInt();
        int c2 = in.nextInt();
        int t = (int) ((c2 - c1) / 100.0 + 0.5);
        int h = t / 3600;
        int m = t % 3600 / 60;
        int s = t % 60;
        System.out.format("%02d:%02d:%02d\n", h, m, s);
    }
}
