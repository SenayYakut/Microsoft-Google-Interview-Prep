/*Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.*/
//My brute forse solution this is O(n^2);
//not very oprimal
//lets think two pointer solution
var position=function(arr,target){
    for(let i=0; i<arr.length; i++){
      if(arr[i]===target){
        return i;
      }else{
        while(arr[i]<target){
          i++;
        }
        return i;
      }
    }
  };
  console.log(position([1,3,5,6], 7));