/* //setinterval :- it excutes every one sec
function hello (){
    console.log("hello");
}
setInterval(hello,3000)
//output is it excute infinitely
*/
//we want modified the loop for 
//we wnt to use 
function hello(){
    console.log("hello buddy!")
}
let timer = setInterval(hello,2000)
setTimeout(function(){
    clearInterval(timer)
},2000)