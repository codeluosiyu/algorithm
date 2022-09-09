/**
 * @title 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @desc: 
 * 用 hashMap 存储遍历过的元素和对应的索引。
   每遍历一个元素，看看 hashMap 中是否存在满足要求的目标数字。
   所有事情在一次遍历中完成（用了空间换取时间）
 */
var twoSum = function(nums, target) {
    const prevNums = {}

    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i]

        const targetNum = target - curNum
        const targetNumIndex = prevNums[targetNum]

        if (targetNumIndex != undefined) {
            return [targetNumIndex, i]
        } else {
            prevNums[curNum] = i
        }
    }
};