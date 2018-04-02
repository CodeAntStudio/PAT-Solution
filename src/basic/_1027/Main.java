package basic._1027;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Scanner;

/**
 * 87~102ms
 * @author relish
 * @since 2018/04/02
 */
public class Main {

    private static int f(int n) {
        return 2 * n * n - 1;
    }

    private static int _f(int s) {
        return (int) Math.sqrt((s + 1) / 2);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        char c = in.next().toCharArray()[0];
        int p = _f(n);

        for (int i = p, k = 0; i >= 1; i--, k++) {
            for (int j = 0; j < k; j++) {
                System.out.print(" ");
            }
            for (int j = 0; j < 2 * i - 1; j++) {
                System.out.print(c);
            }
            System.out.println();
        }
        for (int i = 2, k = p - i; i <= p; i++,k--) {
            for (int j = 0; j < k; j++) {
                System.out.print(" ");
            }
            for (int j = 0; j < 2 * i - 1; j++) {
                System.out.print(c);
            }
            System.out.println();
        }
        System.out.println(n - f(p));
    }
}