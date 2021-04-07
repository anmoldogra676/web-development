// let fs = require("fs");
// console.log("Before");
//  let frP = fs.promises.readFile("../f1.txt");
//  // there is also a nesting inside callbacks 
//  // ----------------------------------------->>>>>>>>>>>>callback to promise bruteforce
//  frP.then(cb1);
//  frP.catch(fcb);
//  function cb1(content) {
//      console.log("content->" + content);
//      console.log("F2 read sent");
//      // start next task
//      let f2rp = fs.promises.readFile("../f2.txt");
//      f2rp.then(cb2);
//  }
//  function cb2(content) {
//      console.log("content->" + content);
//      console.log("F3 read sent");
//      // start next task
//      let f3rp = fs.promises.readFile("../f3.txt");
//      f3rp.then(cb3);
//  }
//  function cb3(content) {
//      console.log("content->" + content);
//      // start next task
//      console.log("All Task completed")
//  }
//  function fcb(err) {
//      // console.log(err)
//      console.log("i will only work for first promise");
//  }


 ///////////////////

 //-------------------------------------------->> WORKING <<------------------------------------------------
//Main point about this serial code is then , catch also return Promise. then and catch are synchronous function but 
//callback inside them are async . so frp first get its value as undefined and f1thenPormise, f2thenPromise, calls their 
// callbacks in node api and a memory is associated with them in which initailly value is undefined and state is 
//pending ..when after sometime file1 content is readed and with resolve  cb1 is called and its print data and there also
// formation of promise object for file 2 read and its state is pending so its return pending in f1thenpromise. now there 
// IS no call for f1thenPromise.then(cb2) because then will only calls when resolve is called but noew state is pending so 
// it will wais until f2rp gets resolved and when it gets resolved  f1thenPromise get is value and thn it calls callbacks 
// cb2 and process goes on
// f1thenPromise value depends upon return state of cb1 if cb1 returns a value  then it gets that value if it returns nothing
// then it will get undefined and we get pending promise so it value now depends upon return value of that pending promise
 

let fs = require("fs");
console.log("Before");
let frP = fs.promises.readFile("../f1.txt");
f1thenPromise = frP.then(cb1);
f2thenPromise = f1thenPromise.then(cb2);
f2thenPromise.then(cb3);

function cb1(content) {
    console.log("content->" + content);
    console.log("F2 read sent");
    // start next task
    let f2rp = fs.promises.readFile("../f2.txt");
    return f2rp;
    
}

function cb2(content) {
    console.log("content->" + content);
    console.log("F3 read sent");
    // start next task
    let f3rp = fs.promises.readFile("../f3.txt");
    return f3rp;
}

function cb3(content) {
    console.log("content->" + content);
    // start next task
    console.log("All Task completed")
}
