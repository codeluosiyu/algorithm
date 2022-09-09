const twoSum = function(nums, target) {
    const prevNums = {}

    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i]
        
        const targetNum = target - currNum
        const targetNumIndex = prevNums[targetNum]

        if (targetNumIndex != undefined) {
            return [targetNumIndex, i]
        } else {
            prevNums[currNum] = i
        }
    }
}