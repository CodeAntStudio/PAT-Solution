package wang.relish.basic._1006;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Scanner;

/**
 * https://www.patest.cn/contests/pat-b-practise/1006
 *
 * @author relish
 * @since 2018/03/10
 */
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        char[] num = String.format("%03d", in.nextInt()).toCharArray();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < num[0] - '0'; i++) {
            sb.append("B");
        }
        for (int i = 0; i < num[1] - '0'; i++) {
            sb.append("S");
        }
        for (int i = 0; i < num[2] - '0'; i++) {
            sb.append(i + 1);
        }
        System.out.println(sb.toString());
    }
}
