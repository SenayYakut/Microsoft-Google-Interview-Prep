    //Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


var generate = function(numRows) {
    // we need the base and it will be able to build up
    let arr = [[1], [1, 1]];
    // making a helper function to create the next row
    function nextRow(nums) {
        // the first number is always 1 
        let newArr = [1];
        
        for (let i = 0; i < nums.length - 1; i++) {
            newArr.push(nums[i]+nums[i+1]);
        };
        // the last number is always 1 
        newArr.push(1);
        return newArr;
    };
    // now we can build up our Pascal's Triangle
    for (let i = 1; i < numRows - 1; i++) {
        arr.push(nextRow(arr[i]));
    }
    
    // we can't just return arr, 
    //there are some edge cases that'll create the errors
    // if the inputs are 0 and 1 it would retrun [[1], [1, 1]] 
    // slicing the arr will solve the edge cases 
    return arr.slice(0, numRows);
};
console.log(generate(5));