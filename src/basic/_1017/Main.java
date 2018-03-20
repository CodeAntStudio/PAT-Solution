package basic._1017;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Scanner;

/**
 * @author relish
 * @since 2018/03/20
 */

public class Main {

    private static void f(char[] s, int n) {
        int[] r = new int[s.length];
        int m = 0;
        for (int i = 0; i < s.length; i++) {
            r[i] = (m * 10 + s[i] - '0') / n;
            m = (m * 10 + s[i] - '0') % n;
        }
        int start = 0;
        for (int i = 0; i < s.length; i++) {
            if (r[i] != 0) {
                start = i;
                break;
            }
        }
        for (int i = start; i < s.length; i++) {
            System.out.print(r[i]);
        }
        System.out.println(" " + m);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        char[] s = in.next().toCharArray();
        int n = in.nextInt();
        f(s, n);
    }
}