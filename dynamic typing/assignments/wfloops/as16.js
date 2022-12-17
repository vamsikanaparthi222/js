//wap to check given number is armstrong number or not
let num = 222
let sum  = 0 
let rem  = 0
let temp = 0
temp = num
while(temp>0){
    rem = temp % 10
    temp = parseInt(temp/10)
    sum=sum+(rem*rem*rem)
}
if(sum==num){
    console.log("armstrong");

}else{
    console.log("not ann armstrong");
}