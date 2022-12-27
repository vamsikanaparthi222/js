//to print 1 to 10 for every 2 sec 
/* function V (a,b){
    let present = a;
    let K =setInterval(()=>{
        console.log(present);
        if(present==b){
            clearInterval(K);
           

        }
        present++;
    },2000)
}
V(1,10) */


//1 to 50
/* function vamsi(a,b){
    let i = a ;
    let K = setInterval(()=>{
        console.log(i);
        if(i==b){
            clearInterval(K)
        }
        i++;
    },1000)  
}
vamsi(1,50)
 */

//1 to 100
function daniel(a,b){
    let i = a;
    let j = setInterval(()=>{
        console.log(i);
        if(i == b){
            clearInterval(j)
        }
        i++
    },1000)
}
daniel(1,100)