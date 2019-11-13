/*Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.*/
var pivotIndex = function(nums) {
    var sum, count = 0;

    if (nums === null || nums.length === 1) return -1
    sum = nums.reduce((a, b) => a + b);

    for (let i = 0; i < nums.length; i++) {
        if (!nums[i-1]) nums[i-1] = 0;
        count += nums[i-1];
        sum -= nums[i];
        if (sum === count) return i;
    }
    return -1
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
