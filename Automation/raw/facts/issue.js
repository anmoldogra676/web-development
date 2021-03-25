// user company-> charge credit card -> commission
console.log("Before");  
// trust issue
let amount = 100;
let priceofOne = 20;
chargeCreditCard(amount, cb); 
function cb() {
    amount = amount - priceofOne;
    console.log("Amount: ", amount);
}
console.log("After");
// 2015 -> Promises
function chargeCreditCard(amount, cb) {  // cred library fuction and we have just used this to make a transction using a
    console.log("processing payment") // callback
    setTimeout(function scb() {
        cb();
        cb();
        console.log("payment done");
    }, 1000);

}

 // issue with callbacks .. we donot change code but what if other library i.e cred in this 
 // case change the code ( two times callback is called )so transction is cut from your bank so there is trust issue
 // in callback and also to remove nesting of callbacks we used promises