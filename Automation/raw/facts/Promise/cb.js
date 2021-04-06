function squarer(x) {
    return x * x;
}
function transform(arr, cb) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        tempArr.push(cb(arr[i]));
    }
    return tempArr;
}
let arr = [1, 2, 3, 4, 5];
// user defined function
let tempArr = transform(arr, squarer);
console.log(tempArr);
// callbacks are nothing but fxn in arguments callbacks doesn't means async
// with async callbacks go to node api 
// with sync fxn they are just like a normal functions in this case what squarer is 