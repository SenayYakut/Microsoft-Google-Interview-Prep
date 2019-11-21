var searchIndex=function(arr, target){
    let start=0;
    let end=arr.length-1;
    let index=Math.floor((start+end)/2);
    if(target>arr[end]){
        index=arr.length;
    }
    while(start<end){
        let value=arr[index];
        if(target===value){
            return index;
            break;    
        }else if(target<value){
            end=index;
        }else{
            start=index+1;
        }
        index=Math.floor((start+end)/2);   
      }
      return index;
    }
    console.log(searchIndex([1,3,5,6],1));



    