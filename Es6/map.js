let a = [1, 2, 3, 4, 5];

function double(x) {
  return 2 * x*x;
}

let ansArr = a.map(double);
// map takes a fxn as a argument and then executes that same fxn on each and every elements of array
// and at end return new array of new values according to function
console.log("Original map function")
console.log(a);
console.log(ansArr);

function mymap(arr , func){
    let ans = [];
    for(let  i= 0; i<arr.length ;i++){
        ans.push(func(arr[i]));
    }
   return ans;

}
let arr = [1,2,3,4,5];
console.log("My map function ")
console.log(arr)
console.log(mymap(arr,double))
