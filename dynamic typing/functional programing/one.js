//functional  programing lanuage :-
//=>it is paradigm programing language
//=> it is a multi-paradigm pograming language , we can use object - oriented and functional progaraming all at sam time 
//imperarative vs declarative
//imperative :- how to go about a problem
//how to approache a code,logic,structure
//declarative :- what acheive from a problem

// given a number is square of the number is even or not
//imperative way of writing code
const a = 5
const issquared = a*a
let isEven;
if(issquared % 2 ==0){
    isEven = true
}else{
    isEven =false
}
console.log(isEven);

//declarative way of writing code
//using ternary operator
const checkforsquare =(x)=>(x*x%2===0? true:false)
console.log(checkforsquare(5));