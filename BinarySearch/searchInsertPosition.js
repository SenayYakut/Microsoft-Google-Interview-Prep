//Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//This is the binary search solution and it is only good for sorted arrays. we will assume that array is sorted.
//it is O(log n);
var searchPosition=function(arr, target){
    let start=0;
    let end=arr.length-1;
    let index=Math.floor((start+end)/2);
    if(target>arr[end]){
        index=arr.length;
    }
        while(start<end){
            let value=arr[index];
            if(target<value){
                end=index;
            }else{
                start=index+1;
            }
            index=Math.floor((start+end)/2);
        }
    return index;
}
console.log(searchPosition([1,2,3,4,5],8));//some edge cases


