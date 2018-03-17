package basic._1014;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it
import java.util.Locale;
import java.util.Scanner;

/**
 * @author relish
 * @since 2018/03/17
 */

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        char[] s1 = in.next().toCharArray();
        char[] s2 = in.next().toCharArray();
        char[] s3 = in.next().toCharArray();
        char[] s4 = in.next().toCharArray();

        int week = -1;
        int hour = -1;
        int count = 0;

        int len12 = s1.length > s2.length ? s2.length : s1.length;
        for (int i = 0; i < len12; i++) {
            if (s1[i] == s2[i]) {
                if (count == 0) {
                    if (s1[i] >= 'A' && s1[i] <= 'G') {
                        week = s1[i] - 'A';
                        count++;
                    }
                } else {
                    if (s1[i] >= 'A' && s1[i] <= 'N') {
                        hour = s1[i] - 'A' + 10;
                        break;
                    } else if (s1[i] >= '0' && s1[i] <= '9') {
                        hour = s1[i] - '0';
                        break;
                    }
                }
            }
        }

        int min = -1;
        int len34 = s3.length > s4.length ? s4.length : s3.length;
        for (int i = 0; i < len34; i++) {
            if (s3[i] == s4[i] && (s3[i] >= 'a' && s3[i] <= 'z' || s3[i] >= 'A' && s3[i] <= 'Z')) {
                min = i;
                break;
            }
        }
        String[] _WEEK = {"MON", "TUE", "WED", "THU", "FIR", "SAT", "SUN"};
        String weekStr = _WEEK[week];
        System.out.format(Locale.ENGLISH, "%s %02d:%02d\n", weekStr, hour, min);
    }
}