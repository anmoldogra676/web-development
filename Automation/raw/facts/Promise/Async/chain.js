let fs = require("fs");
let frp = fs.promises.readFile("f1.txt");
console.log("before");
let thenKaPromise = frp.then(scb);
function scb(data) {
    console.log("inside scb");
    let f2P = fs.promises.readFile("f2.txt") // it will wait until this get resolved / reject
    return f2P; // and then it return promise to thenkaPromise
}
thenKaPromise.then(
function (data) {
console.log("data--> "+data); // data -> return value of scb which is promise object so promise object.then means 
// uska  data so promise object is f2p hence f2p ka data so it waits until f2p gets resolved or rejected

})

console.log("then ka promise", thenKaPromise)
setTimeout(function () {
    console.log("frp", frp);
    console.log("then ka promise", thenKaPromise);
}, 1000);
console.log("After");