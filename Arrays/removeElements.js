//Given an array nums and a value val, remove all instances of that value in-place and return the new length.

//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

//The order of elements can be changed. It doesn't matter what you leave beyond the new length.

const removeElement=function(nums, val){
    var newNums=nums.sort();

    let i=0;
    let j=nums.length-1;
    while(i<=j){
        if(nums[i]===val){
            var temp=newNums[i];
             temp==newNums[j];
                newNums+=newNums[j];
                j--;
            }
        }
        return newNums.length;
    }
    console.log(removeElement([3,2,2,3],3));
//another solution
    const removeElement = (nums, val) => {
        let slowRunner = 0,
          index = 0;
        const origLength = nums.length;
      
        while (index < origLength) {
          while (index < origLength && nums[index] !== val) {
            nums[slowRunner] = nums[index];
            index++;
            slowRunner++;
          }
          index++;
        }
      
        return slowRunner;
      };
      //best solution using splice method
      //this is best solution for space complexity, we only modify the existing array 
      //space complexity it is O(n)Linear 
      var removeElement=function(nums,val){
          for(var i=nums.length-1; i>=0; i--){
              if(nums[i]===val){
                  nums.splice(i,1);
              }
          }
          return nums.length;
          
      }
      console.log(removeElement([3,2,2,3],3));