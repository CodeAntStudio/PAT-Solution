package wang.relish.basic._1005;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.*;

/**
 * https://www.patest.cn/contests/pat-b-practise/1005
 *
 * @author relish
 * @since 2018/03/09
 */
public class Main {


    private static Set<Integer> set = new HashSet<>();

    /**
     * collect all digits covered by {@code n}
     * and put covered digits into a set
     */
    private static void coveredDigitCollection(int n) {
        if (n == 1) return;

        n = n % 2 == 0 ? n / 2 : (3 * n + 1) / 2;
        set.add(n);
        coveredDigitCollection(n);
    }

    private static List<Integer> deal(int[] arr) {
        for (int d : arr) {
            coveredDigitCollection(d);
        }
        List<Integer> result = new ArrayList<>();
        for (int d : arr) {
            if (!set.contains(d)) {
                result.add(d);
            }
        }
        Collections.sort(result);
        Collections.reverse(result);
        return result;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = in.nextInt();
        }
        List<Integer> result = deal(arr);
        System.out.println(Arrays.toString(result.toArray(new Integer[result.size()])).replaceAll("\\[|,|]",""));
    }
}
