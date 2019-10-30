/*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.*/

//this is also bruteforce solution O(n),linear, i will improve this solution later
var largestSum=function(nums){
    var len=nums.length;
    var sortedNums=nums.sort();
    var largestSum=0;
    
    while(sortedNums[len-1]===sortedNums[len-2]){
       len--;
    }
    largestSum+=sortedNums[len-1]+sortedNums[len-2]; 
    return largestSum;
}
console.log(largestSum([4,-1,2,1]));