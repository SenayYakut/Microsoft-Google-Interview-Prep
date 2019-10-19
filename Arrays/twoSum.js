/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

const twoSum=function(arr, target){
    let newAr1=[];
    
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
        if(arr[i] + arr[j] === target){
            newAr1.push(arr[i],arr[j]);
        }else{
            return false;
        }
        return newAr1;
    }
}

console.log(twoSum([1,2,3,4,5,6], 7));
