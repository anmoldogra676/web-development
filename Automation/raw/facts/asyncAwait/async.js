//                       Some facts regarding async 

// 1. async function always returns a promise
// 2. if we returna  value then it will return a promise with that value 
//    as its resolved value
// 3. if you return a pending promise then it will return that pending promise


////////////////////******************************************************************///////////////////
//                         CODE 

// let fs  = require('fs')
 
// async function fn(){
//     console.log("Hello")
//     let frp = fs.promises.readFile('f1.txt');
//     return frp // pending promise aayega toh yeh pending promise hi return kr dega wait ni krega async k case m 
//     // line 3 
// }
// let fnkaPro = fn()
// console.log(fnkaPro)
// fnkaPro.then(function(data){
//     console.log("data -> " + data)
// })




//                       Some facts regarding async  await 

// 1. await is only valid inside async function
// 2. await will wait for a promise to get resolve and give it's resolved value
// 3. await will suspends the execution of currently executing async function and 
// 4. async function returns a promise that will be resolved when the whole async
// fun is executed


async function fn(){
    console.log("Hello") // phle yeh hoga 
    let frp = fs.promises.readFile('f1.txt'); // promise dega 
    let data = await frp;// wait for resolve of promise so it out of stack and return pending promise  to fnkaPro
    console.log(data) //  print the data after resolved state 
    return 10 // return 10 with wrapped in promise 
}
let fnkaPro = fn() // 2nd number pr execute
console.log(fnkaPro)
fnkaPro.then(function(data){
    console.log("data -> " + data)
})