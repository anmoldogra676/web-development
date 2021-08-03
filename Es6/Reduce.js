// it works upon array 
// its output is single value
// map, filter takes only one argument while reduce takes two arguments 
// reduce works upon 2 values means arguments in fxn i.e in sum it takes 2 argument a, b
let a =[1,2,3]
function sum(a,b){
    return a+b};
let reducedValue = a.reduce(sum);
console.log(` Original Reduce function :: ${a}`)
console.log(reducedValue)

/// my reduce function

function myReduce(a, func){
    let ans = a[0];
    for(let i=1 ;i <a.length ;i++){
        ans = func(ans, a[i])
    }
    return ans;
}
console.log("My reduce fxn" ,myReduce(a, sum));
