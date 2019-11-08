//Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

//Example: 

var minSubArrayLen = function(s, nums) {
    let sum = 0;
    let count = 0;
    let countArr = [];
    
    for(let i = 0; i < nums.length; i++) {
      sum += nums[i];
      count++;
      
      if(sum >= s) {
        return count;
      } 
      
        for(let j = i+1; j < nums.length; j++) {
          sum += nums[j];
          count++;
          
          if(sum >= s) {
            countArr.push(count);
           break;
          }
        }
        sum = 0;
        count = 0;
    }
    
    if (countArr.length === 0) {
      return 0;
    }
    return Math.min(...countArr)
};

minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8])