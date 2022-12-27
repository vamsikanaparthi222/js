/* //reading a file synchronously
const { log } = require('console');
const fs =require ('fs')
console.log('first line');

let data= fs.readFileSync('f1.txt')
 console.log('file 1 data -> '+data);

 let data2 = fs.readFileSync('f2.txt')
 console.log('file 2 data ->'+data2);


console.log('last line'); */


//reading a file asynchronously
const fs = require ('fs')
console.log('first line');
 fs.readFile('f1.txt',cb1)   // i want to use a callback function
 function cb1(err,data){
    if(err){
        console.log(err);
    }
    console.log('file 1 data ->'+data);
 }

 
console.log('last line');  //using this callback function (lastline )goes to top
//that is (firstline)
//(lastline) 
//file 1 data