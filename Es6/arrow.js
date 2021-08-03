`
 arrow function likhenge react main this wali cheez backend m sense deti hai  
arrow fxn no name and now function keyword
 name ki jagah we save that inko variable and function keyword ki jagah we use arrow
no need to handle this if we are using arrow fxn and syntax also becomes eaiser


`

// normal fxn
function f(x, y){
    return x*2;
}
// same fxn converted into arrow function
let f1 = (x,y)=>{
    return x*2;
}

// sirf ek argument no need to use parenthisis
let f2 =x=>{
    return x*2;
}
// arrow fxn  agr  statement ek hi  hai aur woh bhi return statement
// hai to simply expression hi likh do

// execution context m agr function baad m likha aur call phle toh undefined ho jayega print
// kyunki fxn ko hm variable m store kr r toh variable flow  m undefined jaata 
// bki normal fxn k case m pura fxn jaata toh woh chl pdega aur arrow fxn nhi chlega woh undefined dega

let f3=x=>x*2;  
console.log(f3(2))
let f4=(x,y)=>x*2*y; 
console.log(f4(4,3))
