//wap to print 1 to 10 2-seconds time interval in javascript
function VA(a,b){
    let present = a;
    let id = setInterval( function(){
        console.log(present);
        if(present == b){
            clearInterval(id);
        }
        present++;

     } ,2000)
    }
    VA(1,10)
