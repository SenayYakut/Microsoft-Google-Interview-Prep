/*The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.*/

/*const num=4;
const binary=num.toString(2);
console.log(binary);

let longer, shorter;
if(x.toString(2).length - y.toString(2).length>0){
    longer=x;
    shorter=y;
}else{
    longer=y;
    shorter=x;
}

let max=Math.max(x,y).toString(2);
let min=Math.min(x,y).toString(2);
*/

const hammingDistance=function(x,y){
    let max=Math.max(x,y).toString(2);
    let min=Math.min(x,y).toString(2);
    min=min.padStart(max.length,0);

    let counter=0;
    for(let i=0; i<max.length; i++){
        if(max[i]!==min[i]){
            counter++;
        }
    }
    return counter;
}
console.log(hammingDistance(1,4));
