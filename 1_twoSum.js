let myArr = [];

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                myArr.push(i, j)
            }
        }
    }
    return myArr
};

console.log(twoSum([3, 2, 4], 6));