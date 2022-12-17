function add(a,b,c){
    console.log(a+b);  //in case a+b+c is given output shows NaN why? because do not declare c value in first add => add(4,6)
}
add(4,6)//NaN
add(222,196,183)//601

//annonymous function :- nothing but a function does not have name
var add2 = function(a,b){
    return a+b
}
let r1 = add(2,3)

//output of this code
num1=3;
function cal() {
num1=6;
num2=5;
num3=num2*num1;
console.log(num3);
}
cal();

//output of this code
function fn(a,b){
    return 4+5;
   }
   fn(3,7);