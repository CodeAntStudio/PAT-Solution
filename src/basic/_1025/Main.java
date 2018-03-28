package basic._1025;
// remove the line of `package xxx.xxx.xxx.xxx;` when you commit it

import java.util.*;

/**
 * 87~129ms
 * @author relish
 * @since 2018/03/28
 */
public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String address = in.next();
        int N = in.nextInt();
        int K = in.nextInt();
        Map<String, Node> addr2Node = new HashMap<>();
        for (int i = 0; i < N; i++) {
            Node node = new Node();
            node.address = in.next();
            node.data = in.next();
            node.next = in.next();
            addr2Node.put(node.address, node);
        }

        List<Node> list = new ArrayList<>();
        for (Node x = addr2Node.get(address); x != null; x = addr2Node.get(x.next)) {
            list.add(x);
        }
        List<Node> result = new ArrayList<>();
        int i;
        for (i = 0; i < list.size(); i += K) {
            if (i + K-1 >= list.size()) {
                for (int j = i; j < list.size(); j++) {
                    Node node = list.get(j);
                    result.add(node);
                }
                break;
            }
            for (int j = i + K - 1; j >= i; j--) {
                Node node = list.get(j);
                if (j == i) {
                    if (i + K < list.size()) {
                        node.next = list.get(i + K).address;
                    } else {
                        node.next = "-1";
                    }
                } else {
                    node.next = list.get(j - 1).address;
                }
                result.add(node);
            }
        }

        for (int k = K-1; k < result.size(); k+=K) {
            if(k+1<result.size()){
                result.get(k).next = result.get(k+1).address;
            }else{
                result.get(k).next = "-1";
            }
        }


        System.out.println(Arrays.toString(result.toArray(new Node[result.size()]))
                .replaceAll(", ", "\n")
                .replaceAll("\\[|]", ""));

    }

    static class Node {
        String address;
        String data;
        String next;

        @Override
        public String toString() {
            return address + " " + data + " " + next;
        }
    }
}