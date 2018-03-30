package advanced._1002;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.*;

/**
 * @author relish
 * @since 2018/03/30
 */

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n1 = in.nextInt();
        Map<Integer, Double> map = new HashMap<>();
        for (int i = 0; i < n1; i++) {
            int p = in.nextInt();
            map.put(p, in.nextDouble());
        }

        int n2 = in.nextInt();

        for (int i = 0; i < n2; i++) {
            int p = in.nextInt();
            double a = in.nextDouble();
            Double aDouble = map.get(p);
            if (aDouble == null) {
                map.put(p, a);
            } else {
                double r = aDouble + a;
                if (Math.abs(r) < 0.01) {
                    map.remove(p);
                } else {
                    map.put(p, r);
                }
            }
        }
        List<Integer> indexs = new ArrayList<>(map.keySet());
        Collections.sort(indexs);
        Collections.reverse(indexs);

        System.out.printf(indexs.size() + "");
        for (Integer p : indexs) {
            System.out.printf(" " + p + " " + String.format(Locale.ENGLISH, "%.1f", map.get(p)));
        }
    }
}
