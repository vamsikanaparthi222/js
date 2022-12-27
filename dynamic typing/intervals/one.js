//javascript in-build functions or methods
//it has 2 types => 1.settimeout() , 2. set interval
//excute few statements every 2 sec (using set interval)
/* setInterval(()=>{
    console.log("hi! vamsi good afternoon");
},2000,
()=>{
    console.log("good night");
},1000) */

function javascript(a,b){
    let i = a;
    let j = setInterval(() => {
        console.log("hi good morning");
        if(i ==b){
            clearInterval(j)
        }
        i++ 
    }, 1000);
}
javascript(1,20)