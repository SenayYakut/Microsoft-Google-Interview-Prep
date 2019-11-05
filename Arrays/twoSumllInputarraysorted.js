//my brute force solution
var twoSum=function(arr, target){
    var pairs=[];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]<arr[j] && arr[i]+arr[j]===target){
                    pairs.push([(i),(j)]);
                
                } 
            }
        }
         return pairs;
    }
   

console.log(twoSum([2,7,11,15],9));