/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = []
    for (let i = 0; i < nums.length; i++){
        if (seen.includes(nums[i])) return true
        seen.push(nums[i])
    }
    return false
};