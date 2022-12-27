const Account = require ('./yu')
class Vamsi{
     constructor(name,last,rank,colony){

}
}
let a1 =new Account("V","A",21,"AP")
let a2 =new Account("VA","AL",21,"TS")
let a3 =new Account("VAM","ALE",21,"APTS")
setInterval(()=>{
    console.log(a1);
    console.log(a2);
    console.log(a3);
},2000);

function javascript(a,b,){
    let i = a;
    let j = setInterval(() => {
        console.log(Account);
        if(i ==b){
            clearInterval(j)
        }
        i++ 
    }, 1000);
}
javascript(1,5)


/*const account=require('./account')
class b{
    constructor(idt, name, msgr, msge, msgef, m, kk){
}
}
let a1=new account(  101,
    "kalish",
    "hello",
    "lemon",
    "kl",
    990,
    "karthik")
setInterval(() => {
 console.log(a1)
    
}, 2000); */