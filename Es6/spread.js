// spread operator 
// ( ... ) works on arrays and objects
// jo yeh ... hain ye arrayk brackets k saath legenge and unko remove kr denge 
// toh end m elements khud bahr aa jayenge pr original m changes ni honge 

// let a = [1, 2, 3];
// let b = [4, 6];

// let c = [...a, ...b];

// let d = [...a, ...a, ...a];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
let a1 = { a:1, b:2}
let a3 ={...a1 ,  ...a1}
console.log(a3)