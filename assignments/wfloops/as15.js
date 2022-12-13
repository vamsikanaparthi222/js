//wap expected out 17 :- 0 1 1 2 3 5 8 13
const number = 17
var i1 = 0
var i2 = 1
var sum;
for(i = 1;i<=number;i++){
    console.log(i);
    sum = i1+i2;
    i1 =i2;
    i2 = sum;
}