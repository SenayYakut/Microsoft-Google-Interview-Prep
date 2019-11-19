//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//this function will only look if it is balanced
function(str) {
    var rightParentheses = '(';
    var leftParentheses = ')';
    var rightCount = 0;
    var leftCount = 0;

    for (var i = 0; i <= str.length; i++) {
       if (rightParentheses == str.charAt(i))
          rightCount++;
       else if (leftParentheses == str.charAt(i))
          leftCount++;

       if (rightCount < leftCount)
          return false;
    }

    return rightCount == leftCount;
}
//this function will print all of the possible strings
function nPair(n) {
    if (n == 0)
        return [""];

    var result = [];
    for (var i = 0; i < n; ++i) {

        var lefts = nPair(i);
        var rights = nPair(n - i - 1);

        for (var l = 0; l < lefts.length; ++l)
            for (var r = 0; r < rights.length; ++r)
                result.push("(" + lefts[l] + ")" + rights[r]);
    }

    return result;
}