package basic._1008;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Arrays;
import java.util.Scanner;

/**
 * https://www.patest.cn/contests/pat-b-practise/1008
 *
 * @author relish
 * @since 2018/03/12
 */
public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int m = in.nextInt();
        m %= n;
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = in.nextInt();
        }
        int[] head = Arrays.copyOfRange(arr, n - m, n);
        int[] tail = Arrays.copyOfRange(arr, 0, n - m);

        int[] newArr = new int[n];
        System.arraycopy(head, 0, newArr, 0, head.length);
        System.arraycopy(tail, 0, newArr, head.length, tail.length);
        System.out.println(Arrays.toString(newArr).replaceAll("\\[|]|,", ""));
    }
}
