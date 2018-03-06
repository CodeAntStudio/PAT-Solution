package wang.relish.basic._1004;
// 提交时去掉 package wang.relish.basic._1003;
import java.util.Scanner;

/**
 * 1004. 成绩排名 (20)
 * https://www.patest.cn/contests/pat-b-practise/1004
 * Created by Relish on 2016/8/4.
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