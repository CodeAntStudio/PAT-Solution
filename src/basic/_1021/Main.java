package basic._1021;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Scanner;

/**
 * @author relish
 * @since 2018/03/25
 */

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        char[] num = in.next().toCharArray();
        int[] count = new int[10];
        for (char c : num) {
            count[c - '0']++;
        }
        for (int i = 0; i < 10; i++) {
            if (count[i] != 0)
                System.out.println(i + ":" + count[i]);
        }
    }
}
