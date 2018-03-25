package basic._1023;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Scanner;

/**
 * @author relish
 * @since 2018/03/25
 */

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String num = "";
        int count0 = in.nextInt();
        if (count0 > 0) {
            for (int j = 0; j < count0; j++) {
                num += 0;
            }
        }
        boolean handled = false;
        for (int i = 1; i < 10; i++) {
            int c = in.nextInt();
            if (c == 0) continue;

            if (handled) {
                for (int j = 0; j < c; j++) {
                    num += i;
                }
            } else {
                if (num.length() > 0 && num.charAt(0) == '0') {
                    num = i + num;
                    handled = true;
                    for (int j = 1; j < c; j++) {
                        num += i;
                    }
                } else {
                    for (int j = 0; j < c; j++) {
                        num += i;
                    }
                }
            }
        }
        System.out.println(num);
    }
}
