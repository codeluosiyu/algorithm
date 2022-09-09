/**
 * @title 50. Pow(x, n)
 * @url https://leetcode-cn.com/problems/powx-n/
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n, sum = 1, m = 0) {
    n < 0 && (n = -n, m = 1)
    while (n) n & 1 && (sum *= x), x *= x, n >>>= 1
    return m ? 1 / sum : sum
}