package basic._1013;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.Scanner;

/**
 *
 * 超时
 *
 * @author relish
 * @since 2018/03/15
 */
public class Main {


    static int[] primes = new int[10005];

    static void primeExec() {
        int tally = 2;
        boolean flag;
        for (int i = 5; tally < 10005; i += 2) {
            flag = true;
            for (int j = 0; primes[j] * primes[j] <= i; j++)
                if (i % primes[j] == 0) {
                    flag = false;
                    break;
                }
            if (flag) {
                primes[tally] = i;
                tally++;
            }
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        primes[0] = 2;
        primes[1] = 3;
        primeExec();
        int n = in.nextInt(), m = in.nextInt();
        int count = 0;
        for (int i = n; i < m; i++) {
            System.out.print(primes[i - 1]);
            count++;
            System.out.print(count % 10 == 0 ? "\n" : " ");
        }
        System.out.print(primes[m - 1]);
        count++;
        System.out.print(count % 10 == 0 ? "\n" : " ");
    }
}
