package wang.relish.basic._1002;
// 提交时去掉 package wang.relish.basic._1001;

import java.util.Scanner;

/**
 * 1002. 写出这个数 (20)
 * https://www.patest.cn/contests/pat-b-practise/1002
 * Created by Relish on 2016/8/4.
 */
public class Main {

    private static String[] pinyin = {"ling", "yi", "er", "san", "si", "wu", "liu", "qi", "ba", "jiu"};

    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        String s = cin.next();
        int sum = 0;
        for (int i = 0; i < s.length(); i++) {
            sum += s.charAt(i) - '0';
        }
        s = sum + "";
        System.out.print(pinyin[s.charAt(0) - '0']);
        for (int i = 1; i < s.length(); i++) {
            System.out.print(" " + pinyin[s.charAt(i) - '0']);
        }
    }
}