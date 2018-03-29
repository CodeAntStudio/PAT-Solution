package advanced._1001;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.text.DecimalFormat;
import java.util.Scanner;

/**
 * @author relish
 * @since 2018/03/29
 */
public class Main {
    /**
     * @param sum   倒序的字符数组
     * @param index 当前数组下表
     */
    private static void f(char[] sum, int index) {
        if (index == sum.length) return;
        f(sum, index + 1);
        if (index % 3 == 2) {
            if ((!(index == sum.length - 2 && sum[sum.length - 1] == '-')) && index != sum.length - 1) {
                System.out.printf(",");
            }
        }
        System.out.printf(sum[index] + "");
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int a = in.nextInt();
        int b = in.nextInt();
        DecimalFormat df = new DecimalFormat("###,###,###");
        System.out.println(df.format(a+b));
    }
}
