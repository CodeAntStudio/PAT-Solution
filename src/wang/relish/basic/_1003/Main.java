package wang.relish.basic._1003;
// 提交时去掉 package wang.relish.basic._1003;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 1003. 我要通过！(20)
 * https://www.patest.cn/contests/pat-b-practise/1003
 * Created by Relish on 2016/8/4.
 */
public class Main {

    private static boolean isPAT(String s) {
        if (s.matches("A*(PAT)A*") &&
                s.substring(0, s.indexOf("PAT")).length() ==
                        (s.substring(s.indexOf("PAT") + "PAT".length()).length())) {
            return true;
        } else if (s.matches("A*(PA+T)A*")) {
            try {
                String a = s.substring(0, s.indexOf("PA"));
                Matcher m = Pattern.compile("PA*T").matcher(s);
                String b = "";
                if (m.find()) {
                    b = m.group();
                }
                b = b.replace("P", "").replace("T", "").substring(1);
                String c = s.substring(a.length() + b.length() + 3).substring(a.length());
                String newS = a + "P" + b + "T" + c;
                return isPAT(newS);//递归验证
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