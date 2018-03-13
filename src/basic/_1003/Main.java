package basic._1003;
// 提交时去掉 package xxx.xxx.xxx.xxx;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * https://www.patest.cn/contests/pat-b-practise/1003
 *
 * @author relish
 * @since 2018/3/5
 */
public class Main {

    private static boolean isPAT(String s) {
        if (s.matches("A*(PAT)A*")) {
            return s.indexOf("PAT") * 2 + 3/* "PAT".length() */ == s.length();
        } else if (s.matches("A*(PA+T)A*")) {
            try {
                String a = s.substring(0, s.indexOf("PA"));
                Matcher m = Pattern.compile("PA+T").matcher(s);
                String b = "";
                if (m.find()) {
                    b = m.group();
                }
                b = b.replace("P", "")
                        .replace("T", "")
                        .substring(1);// remove a 'A'
                String c = s.substring(a.length() + b.length() + 3) // ca
                        .substring(a.length());
                String newS = a + "P" + b + "T" + c; // transformed string
                return isPAT(newS); // recursion
            } catch (IndexOutOfBoundsException e) {
                return false;
            }
        } else {
            return false;
        }
    }

    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        int n = cin.nextInt();
        for (int i = 0; i < n; i++) {
            System.out.println(isPAT(cin.next()) ? "YES" : "NO");
        }
    }
}