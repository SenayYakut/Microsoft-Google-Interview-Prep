//Brute force solution, not the best solution
//3 loops, i dont even think about this after tree loops i will feel dizzy

// lets think an optimal solution

var treeSum_Brute=function(nums){
    nums=nums.sort(function(a,b){
        return a-b;
    });

    let uniqueTriplets=[];
    let i,j,k;
    let len=nums.length;

    for(i=0; i<len; i++){
        if(i>0 && nums[i]=== nums[i-1]) continue;
        for(j=i+1; j<len; j++){
            if(j>i+1 && nums[j]===nums[j-1]) continue;
            for(k=j+1; k<len; k++){
                if(k>j+1 && nums[k]===nums[k-1]) continue;

                if((nums[i]+nums[j]+nums[k])===0){
                    uniqueTriplets.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return uniqueTriplets;
}
console.log(treeSum_Brute([-1,0,1,2,-1,-4]));