//Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

//You may return any answer array that satisfies this condition.

var nonNegative=function(arr){
    let arrSorted=arr.sort(function(a, b){return b - a});
    let newArr=[];
    let evens=[];
    let odds=[];
    if(arr.length===0){
         return false;
        }else{
        for(let i=0; i<arr.length; i++){
            if(arrSorted[i]%2===0) evens.push(arrSorted[i]);
            if(arrSorted[i]%2!==0) odds.push(arrSorted[i]);
            }
            newArr=evens.concat(odds);
        }
       return newArr; 
    }
    console.log(nonNegative([3,1,2,4]));

