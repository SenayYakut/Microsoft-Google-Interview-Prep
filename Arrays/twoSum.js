/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
//not the best solution,because it has to loof two times so 0(n^2) 
const twoSum=function(arr, target){
    let result=[];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]===target){
                result.push(i);
                result.push(j);                    
          }
        }
    }
return result;
}
console.log(twoSum([1,2,3,4,5,6], 7));

//hash table solution //best solution it is constant O(1);
function twoSum(arr, target) {
    let numObject = {};
    for (var i = 0; i < arr.length; i++) {
        let thisNum = arr[i];
        numObject[thisNum] = i;
    }
    for (var i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            return [i, numObject[diff]];
        }
    }
}
console.log(twoSum([1, 2, 3, 4, 5, 6,], 7));
// Output [ 0, 1 ]
