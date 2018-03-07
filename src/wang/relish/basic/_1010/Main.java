package wang.relish.basic._1010;
// 提交时去掉 package wang.relish.basic._1003;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

/**
 * 1010. 一元多项式求导 (25)
 * https://www.patest.cn/contests/pat-b-practise/1010
 * Created by Relish on 2016/8/6.
 */
public class Main {

    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        List<Integer> list = new ArrayList<>();
        List<Integer> result = new ArrayList<>();
        while (cin.hasNext()) {
            list.add(cin.nextInt());
        }
        if (list.size() == 2 && list.get(1) == 0) {
            System.out.println("0 0");
            return;
        } else {
            for (int i = 0; i < list.size(); i += 2) {
                Integer n = list.get(i + 1);
                if (n == 0) {
                    continue;
                }
                result.add(list.get(i) * n);
                result.add(n - 1);
            }
        }
        System.out.println(Arrays.toString(result.toArray(new Integer[result.size()])).replaceAll("\\[|\\]|,", ""));
    }
}