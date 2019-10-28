//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

//Do not allocate extra space for another array, you must dthe input array in-place with O(1) extra memory.
//this is linear, which is not very optimal 0(n);
//lets think a more optimal solution
var nums=[1,1,2];
var removeDuplicates=function(nums){

    if(nums.length===0){
        return nums;
    }
    var sortedNums=nums.sort();
    var newNums=[];
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==nums[i+1]){
            newNums.push(arr[i]);
        }
    }
    return newNums;
} 
console.log(removeDuplicates(nums));