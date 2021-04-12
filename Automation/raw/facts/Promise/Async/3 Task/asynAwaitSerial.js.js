let fs = require("fs");
console.log("Before");
// await is an alternative to then 
// await only works inside an async function
//  only async function will wait for await 
// syntax write easier method

(async function(){
    console.log("before in async ")
    let f1c= await fs.promises.readFile("../f1.txt");// f1c contains the main contents of file f1
    console.log("data of file f1 - >   " +f1c);
    let f2c = await fs.promises.readFile("../f2.txt");
    console.log("data of file f2 - >    " + f2c);
    let f3c = await fs.promises.readFile("../f3.txt");
    console.log("data of file f3 - >  " + f3c);
   
})();


console.log("Before");



