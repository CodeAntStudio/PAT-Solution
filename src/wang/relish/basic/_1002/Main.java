package wang.relish.basic._1002;
// 提交时去掉 package wang.relish.basic._1002;

import java.util.Scanner;

/**
 * https://www.patest.cn/contests/pat-b-practise/1002
 *
 * @author relish
 * @since 2018/3/4
 */
public class Main {

    private static int deal(String input) {
        int sum = 0;
        for (int i = 0; i < input.length(); i++) {
            sum += input.charAt(i) - '0';
        }
        return sum;
    }

    private static void printNum(int sum) {
        String[] pinyin = {"ling", "yi", "er", "san", "si", "wu", "liu", "qi", "ba", "jiu"};
        String result = String.valueOf(sum);
        System.out.print(pinyin[result.charAt(0) - '0']);
        for (int i = 1; i < result.length(); i++) {
            System.out.print(" " + pinyin[result.charAt(i) - '0']);
        }
    }

    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        printNum(deal(cin.next()));
    }
}