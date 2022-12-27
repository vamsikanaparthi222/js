//call back functions :- it is a function which pass into another afunction as a argument
/* function printFirstName (FirstName){
    console.log(FirstName);
}
printFirstName("vamsi")


function printLastName(LastName){
    console.log(LastName);
}
printLastName("daniel") */


//callback 
function printFirstName(FirstName,cb){
    console.log(FirstName);
    cb("daniel")
}
function printLastName(LastName){
    console.log(LastName);
}
printFirstName("vamsi",printLastName)