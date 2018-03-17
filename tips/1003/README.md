# [1003. 我要通过！(20)][title]

| 时间限制 | 内存限制 | 代码长度限制 | 判题程序 |   作者   |
|:-------:|:-------:|:----------:|:-------:|:-------:|
|  400 ms | 65536 kB|   8000 B   | Standard|CHEN, Yue|

“答案正确”是自动判题系统给出的最令人欢喜的回复。本题属于PAT的“答案正确”大派送 —— 只要读入的字符串满足下列条件，系统就输出“答案正确”，否则输出“答案错误”。

得到“答案正确”的条件是：

1. 字符串中必须仅有P, A, T这三种字符，不可以包含其它字符；
2. 任意形如 xPATx 的字符串都可以获得“答案正确”，其中 x 或者是空字符串，或者是仅由字母 A 组成的字符串；
3. 如果 aPbTc 是正确的，那么 aPbATca 也是正确的，其中 a, b, c 均或者是空字符串，或者是仅由字母 A 组成的字符串。

现在就请你为PAT写一个自动裁判程序，判定哪些字符串是可以获得“答案正确”的。  

**输入格式**： 每个测试输入包含1个测试用例。第1行给出一个自然数n (<10)，是需要检测的字符串个数。接下来每个字符串占一行，字符串长度不超过100，且不包含空格。

**输出格式**：每个字符串的检测结果占一行，如果该字符串可以获得“答案正确”，则输出YES，否则输出NO。

**输入样例**：
> 8  
> PAT  
> PAAT  
> AAPATAA  
> AAPAATAAAA  
> xPATx  
> PT  
> Whatever  
> APAAATAA  

**输出样例**：
> YES  
> YES  
> YES  
> YES  
> NO  
> NO  
> NO  
> NO  

## 思路
重点在于读懂**条件3**, 考察的是**递归**的思想, 最好是对**正则表达式**也有所了解。

一步步来分析：
`如果 aPbTc 是正确的`。那么什么样的`aPbTc`是正确的？从**条件1**和**条件2**知道, 正确的格式是`A*PATA*`且`PAT`两端的`字符'A'`数量一致。  
`那么 aPbATca 也是正确的`。这句话就意味着,如果我们遇到`aPbATca`这样的字符串,只需要将它转化为`aPbATca`,判断`aPbATca`是否符合规则就行了。如果转化后的字符串仍然无法判断是否符合规则，则继续转化，直到能够判断出是否符合规则为止。

就拿样例中的`AAPAATAAAA`举例说明:  
`AAPAATAAAA` =>   
```js
a = "AA";
b = "A";
c = "AA";
```

转化一次后: `AAPATAA`  

`AAPATAA`就已经是符合**条件1**和**条件2**的字符串了

那么什么样的字符串是`aPbATca`格式的呢?根据**条件3**剩下的文字描述,应该是`A*PA+TA*`格式的(且**不需要**确保`PA+T`两端的`字符'A'`数量一致)


### Java代码
```java
public class Main{
    private static boolean isPAT(String s) {
        if (s.matches("A*(PAT)A*")) {
            return s.indexOf("PAT") * 2 + 3/* "PAT".length() */ == s.length();
        } else if (s.matches("A*(PA+T)A*")) {
            try {
                String a = s.substring(0, s.indexOf("PA"));
                Matcher m = Pattern.compile("PA+T").matcher(s);
                String b = "";
                if (m.find()) {
                    b = m.group();
                }
                b = b.replace("P", "")
                        .replace("T", "")
                        .substring(1);// remove a 'A'
                String c = s.substring(a.length() + b.length() + 3) // ca
                        .substring(a.length());
                String newS = a + "P" + b + "T" + c; // transformed string
                return isPAT(newS); // recursion
            } catch (IndexOutOfBoundsException e) {
                return false;
            }
        } else {
            return false;
        }
    }
}
```

### JavaScript代码
```javascript
var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var nLine = +inputArr[0];
    if (inputArr.length == (nLine + 1)) {
        var arr = inputArr.slice(1);
        for(var item of arr) {
            var result = deal(item)
            console.log(result);
        }
        rl.close();
    }
});

function deal(inputs) {
    if (/^A*PATA*$/.test(inputs)) {
        var indexOfPAT = inputs.indexOf('PAT')
        return indexOfPAT*2+3===inputs.length?'YES':'NO'
    } else if(/^A*PA+TA*$/.test(inputs)){
        var a = inputs.split('P')[0]
        var b = inputs.split('P')[1].split('AT')[0]
        var c = inputs.split('P')[1].split('AT')[1];
        try{
            c = c.substring(0, c.length-a.length);
            return deal(a + 'P' + b + 'T' + c)
        }catch(e){
            return 'NO';
        }
    }else{
        return 'NO';
    }
}
```

[title]: https://www.patest.cn/contests/pat-b-practise/1003
