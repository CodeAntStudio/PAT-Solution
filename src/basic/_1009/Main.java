package basic._1009;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Scanner;

/**
 * https://www.patest.cn/contests/pat-b-practise/1009
 *
 * @author relish
 * @since 2018/03/12
 */
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String[] strs = in.nextLine().split(" ");
        for (int i = strs.length - 1; i > 0; i--) {
            System.out.print(strs[i] + " ");
        }
        System.out.println(strs[0]);
    }
}
