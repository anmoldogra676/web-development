// map reduce filter returns new array they do not change the original array
// filter works upon as follows : it basically loops and cehck function and if fuction value is true then it adds
// that value in new resultant array 

let a = [1, 2, 3, 4, 5];

function isEven(x) {
  return x % 2 == 0;
}

let filteredArr = a.filter(isEven);
console.log("Original Filter function")
console.log(a);
console.log(filteredArr);

function myfilter(arr , func){
  let ans = [];
  for(let  i= 0; i<arr.length ;i++){
     if(func(arr[i])==true) ans.push(arr[i]);
  }
 return ans;

}
let arr = [1,2,3,4,5];
console.log("My filter function ")
console.log(arr)
console.log(myfilter(arr,isEven))