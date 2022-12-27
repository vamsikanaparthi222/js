//scaler
//settimeout :- after a particular time it will be excuted
function greet(){
    console.log("hello");
}
setTimeout(greet,3000)


//we can also use clg() before the function and after invoking the function
console.log("before");
function greet(){
    console.log("hello");
}
setTimeout(greet,3000)

console.log("after");
//before and after excutes quikly but hello excute after some time