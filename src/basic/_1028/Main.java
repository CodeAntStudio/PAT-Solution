package basic._1028;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Scanner;

/**
 * @author relish
 * @since 2018/04/02
 */

public class Main {

    private static boolean isDateCorrect(String date) {
        String[] ymd = date.split("/");
        if (ymd.length != 3) return false;
        int y = -1;
        int m = -1;
        int d = -1;
        try {
            y = Integer.parseInt(ymd[0]);
            m = Integer.parseInt(ymd[1]);
            d = Integer.parseInt(ymd[2]);
        } catch (Exception e) {
            return false;
        }
        return date.compareTo("2014/09/06") <= 0 && date.compareTo("1814/09/06") >= 0 && isDayCorrect(y, m, d);
    }

    private static boolean isDayCorrect(int year, int month, int day) {
        return month >= 1 && month <= 12 && getMonthDayCount(year, month) >= day && day >= 1;
    }

    private static int getMonthDayCount(int y, int m) {
        return m == 2 ?
                ((y % 4 == 0 && y % 100 != 0 || y % 400 == 0) ? 29 : 28)
                : (m < 8 ^ m % 2 == 0 ? 31 : 30);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int validCount = 0;
        String oldestAge = "2014/09/07";
        String oldestName = "";
        String youngestAge = "1814/09/05";
        String youngestName = "";
        for (int i = 0; i < n; i++) {
            String name = in.next();
            String date = in.next();
            if (isDateCorrect(date)) {
                validCount++;
                if (date.compareTo(oldestAge) < 0) {
                    oldestAge = date;
                    oldestName = name;
                }
                if (date.compareTo(youngestAge) > 0) {
                    youngestAge = date;
                    youngestName = name;
                }
            }
        }
        System.out.printf(validCount + "");
        if (!oldestName.isEmpty())
            System.out.print(" " + oldestName);
        if (!youngestName.isEmpty())
            System.out.print(" " + youngestName);
    }
}
