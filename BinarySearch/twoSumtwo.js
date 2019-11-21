//this is brute force, not very optiml solution, it is n^2 time complexity but it is o(n) space complexity
var twoSum = function(arr, target){
    var newArr=[];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]!==arr[j]){
              if(arr[i]+arr[j]===target)
                newArr.push([arr[i],arr[j]]);        
            }
        }
    }
    return newArr;
} 
console.log(twoSum([2,7,11,15,0,9],9));