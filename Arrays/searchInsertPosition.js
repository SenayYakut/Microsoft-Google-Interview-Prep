/*Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.*/
const searchInsertPosition=function(nums, target){
    for(let i=0; i<nums.length; i++){
        if(nums[i]===target){
            return i;
        }else{
            while(nums[i]<taget){
                i++;
            }
        }
        return i;

}
console.log(searchInsertPosition([1,3,5,6], 5));