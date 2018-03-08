package wang.relish.basic._1004;
// 提交时去掉 package xxx.xxx.xxx; 或 注释掉

import java.util.Scanner;

/**
 * https://www.patest.cn/contests/pat-b-practise/1004
 *
 * @author relish
 * @since 2018/03/06
 */
public class Main {

    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        int n = cin.nextInt();
        String maxName = "", minName = "", maxNum = "", minNum = "";
        int minScore = 0, maxScore = 0;
        for (int i = 0; i < n; i++) {
            String name = cin.next();
            String num = cin.next();
            int score = Integer.parseInt(cin.next());
            if (i == 0) {
                maxName = name;
                maxNum = num;
                maxScore = score;
                minName = name;
                minNum = num;
                minScore = score;
            } else {
                if (score > maxScore) {
                    maxName = name;
                    maxNum = num;
                    maxScore = score;
                }
                if (score < minScore) {
                    minName = name;
                    minNum = num;
                    minScore = score;
                }
            }
        }
        System.out.println(maxName + " " + maxNum);
        System.out.println(minName + " " + minNum);
    }
}