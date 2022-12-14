/**
 * @title 121. 买卖股票的最佳时机
 * @description 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    /*
        思路一 双层遍历 O(n^2) 
        a 外层遍历i 0~prices.length - 1
        b 内层遍历j i + 1~prices.length - 1
        c 找出大于当前项目 prices[i] 并 卖出 并 更新最大值
        d 输出结果
     */
    if (!prices || !prices.length) return 0

    const len = prices.length
    let curr = 0,
        max = 0,
        next = 0;

    for (let i = 0; i < len; i++) {
        curr = prices[i]
        for (let j = i + 1; j < len; j++) {
            next = prices[j]
            if (next > curr) {
                max = Math.max(max, next - curr)
            }
        }
    }
    return max
};



/**
 * @title 121. 买卖股票的最佳时机
 * @description 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    /* 
        思路二 DP  Time: O(n) + Space: O(n)
        dp[i] 前i天卖出的最大利润
        min : prices 前i项中的最小值
        prices[i] - min: 当前位置卖出可得最大利润
        dp[i - 1] : 前i-1项目卖出可得的最大利润
        [7, 1, 5, 3, 6, 4] => dp[i] = Math.max( dp[i - 1], prices[i] - min )
        [7]                [0, 0, 0, 0, 0, 0]
        [7, 1]             [0, 0, 0, 0, 0, 0]
        [7, 1, 5]          [0, 0, 4, 0, 0, 0]
        [7, 1, 5, 3]       [0, 0, 4, 4, 0, 0]
        [7, 1, 5, 3, 6]    [0, 0, 4, 4, 5, 0]
        [7, 1, 5, 3, 6, 4] [0, 0, 4, 4, 5, 5]

        输出结果 dp[len - 1]
    */

    if (!prices || !prices.length) return 0

    const len = prices.length,
        dp = new Array(len).fill(0)
    let min = prices[0];

    for (let i = 1, price; i < len; i++) {
        price = prices[i]
        min = Math.min(min, price)
        dp[i] = Math.max(dp[i - 1], price - min)
    }
    return dp[len - 1]
};


/**
 * @title 121. 买卖股票的最佳时机
 * @description 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    /* 
        思路三 DP + 常量级变量 min max Time - O(n) + Space - O(1)
        精简 我们只关心 max 与 min 故不需要再构建dp 数组
    */

    if (!prices || !prices.length) return 0

    let min = Number.MAX_SAFE_INTEGER,
        max = 0;
    for (let i = 0, price; i < prices.length; i++) {
        price = prices[i]
        min = Math.min(min, price)
        max = Math.max(max, price - min)
    }
    return max
};



/**
 * @title 121. 买卖股票的最佳时机
 * @description 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    return prices.reduce((p, v) => [Math.min(p[0], v), Math.max(p[1], v - p[0])], [Number.MAX_SAFE_INTEGER, 0])[1]
};