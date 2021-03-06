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

var minSubArrayLen = function(s, nums) {
    if (nums.length === 0) return 0;
    const slideWindow = [];
    let acc = 0;
    let min = null;
  
    for (let i = 0; i < nums.length + 1; i++) {
      const num = nums[i];
  
      while (acc >= s) {
        if (min === null || slideWindow.length < min) {
          min = slideWindow.length;
        }
        acc = acc - slideWindow.shift();
      }
  
      slideWindow.push(num);
  
      acc = slideWindow.reduce((a, b) => a + b, 0);
    }
  
    return min || 0;
  };

  //this is my fav
  var minSubArrayLen = function(s, nums) {
    const sums = [0];
    for (let k of nums) {
        sums.push(sums[sums.length - 1] + k);
    }
    let min = Infinity;
    for (let i = 0, j = 1; j < sums.length; j++) {
        while (sums[j] - sums[i] >= s) {
            min = Math.min(min, j - i);
            i++;
        }
    }
    return min === Infinity ? 0 : min;
};

minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8])