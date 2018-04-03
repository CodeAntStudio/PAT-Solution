package basic._1029;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

/**
 * @author relish
 * @since 2018/04/03
 */

public class Main {

    private static String[] deal(String str1, String str2) {
        char[] source = str1.toCharArray();
        char[] output = str2.toCharArray();
        List<String> characters = new ArrayList<>();
        for (int i = 0, j = 0; i < source.length; i++) {
            char c = source[i];
            if (j < output.length && c == output[j]) {
                j++;
            } else {
                char uc = Character.toUpperCase(c);
                if (!characters.contains(uc + "")) {
                    characters.add(uc + "");
                }
            }
        }
        return characters.toArray(new String[characters.size()]);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String str1 = in.next();
        String str2 = in.next();
        String[] result = deal(str1, str2);
        System.out.println(Arrays.toString(result).replaceAll(", |\\[|]", ""));
    }
}
