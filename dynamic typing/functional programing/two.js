//2.pure functions and side efeects
//=>1. it is a function which given the same input and return the same output
 //produce no side effects
 //adding of x+a
 //impure function
/*  var a =10
  function addimpure(x){
    console.log(x+a);  
  }
  addimpure(2) */

  //pure function
  function addpure(x,a){
    return x+a
  }
    console.log(addpure(2,3));

  //diff is pure fuction do not take any external values like var