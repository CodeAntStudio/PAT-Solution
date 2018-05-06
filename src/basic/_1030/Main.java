package basic._1030;

import java.util.Arrays;
import java.util.Scanner;

/**
 * @author relish
 * @since 2018/05/07
 */
public class Main {
    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        int n = cin.nextInt();
        int p = cin.nextInt();
        long[] arr = new long[n];
        for (int i = 0; i < n; i++) {
            arr[i] = cin.nextInt();
        }
        Arrays.sort(arr);
        int max = 1;
        for (int j = 0; j < n; j++) {
            for (int i = j + max; i < n; i++) {
                if (arr[i] <= arr[j] * p) {
                    if (max < i - j + 1) {
                        max = i - j + 1;
                    }
                } else break;
            }
        }
        System.out.println(max);
    }
}
