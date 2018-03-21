package basic._1016;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Scanner;

/**
 * @author relish
 * @since 2018/03/19
 */

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String[] strs = in.nextLine().split(" ");
        StringBuilder s1 = new StringBuilder();
        StringBuilder s2 = new StringBuilder();
        for (char c : strs[0].toCharArray()) {
            if ((c + "").equals(strs[1])) {
                s1.append(c);
            }
        }
        for (char c : strs[2].toCharArray()) {
            if ((c + "").equals(strs[3])) {
                s2.append(c);
            }
        }
        System.out.println(
                Integer.parseInt(s1.toString().equals("") ? "0" : s1.toString()) +
                        Integer.parseInt(s2.toString().equals("") ? "0" : s2.toString()));
    }
}
