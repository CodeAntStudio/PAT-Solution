package wang.relish.basic._1007;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * https://www.patest.cn/contests/pat-b-practise/1007
 *
 * @author relish
 * @since 2018/03/11
 */
public class Main {
    static boolean isPrime(int n) {
        if (n == 2) return true;
        if (n % 2 == 0) return false;
        for (int i = 3; i * i <= n; i += 2) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        List<Integer> list = new ArrayList<>();
        for (int i = 2; i <= n; i++) {
            if (isPrime(i)) {
                list.add(i);
            }
        }
        int count = 0;
        for (int i = 0; i < list.size() - 1; i++) {
            if (list.get(i + 1) - list.get(i) == 2) {
                count++;
            }
        }
        System.out.println(count);
    }
}
