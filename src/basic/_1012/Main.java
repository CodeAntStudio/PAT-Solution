package basic._1012;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Locale;
import java.util.Scanner;

/**
 * 已经很接近正确的答案了(64ms左右)
 * 预计优化到50ms内可以AC
 * 题目要求100ms内
 * 我尽力了...
 *
 * @author relish
 * @since 2018/03/12
 */
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int A1 = 0;
        int A2 = 0, A2Count = 0;
        int A3 = 0;
        int A4 = 0, A4Count = 0;
        int A5 = 0;
        int num = in.nextInt();
        for (int i = 0; i < num; i++) {
            int n = in.nextInt();
            A1 += n % 10 == 0 ? n : 0;
            A2Count += n % 5 == 1 ? 1 : 0;
            A2 += n % 5 == 1 ? (A2Count % 2 == 1 ? 1 : -1) * n : 0;
            A3 += n % 5 == 2 ? 1 : 0;
            A4Count += n % 5 == 3 ? 1 : 0;
            A4 += n % 5 == 3 ? n : 0;
            A5 = n % 5 == 4 && n > A5 ? n : A5;
        }
        System.out.println((A1 == 0 ? "N" : A1) + " " +
                (A2Count == 0 ? "N" : A2) + " " +
                (A3 == 0 ? "N" : A3) + " " +
                (A4Count == 0 ? "N" : String.format(Locale.ENGLISH, "%.1f", A4 * 1.0 / A4Count)) + " " +
                (A5 == 0 ? "N" : A5));
    }
}