//entries methode :- getting an index values 
let colors = ["yellow","green","pink","red"]
for(var [index,color] of colors.entries()){
    console.log(index+"->"+color);
}

//strings :-  string is used for display each and every character
var str = "vamsi"
for(var a of str){
    console.log(a);   
}

//for(of) (in this case we are adding +5 in scores)
var scores = [60,90,80,]
for(var score of scores){
    score = score + 5
    console.log(score);
}

//what is the output of javascript
var num = 105;
if(num%5 ==0){
    console.log("divisible");
}else{
    console.log("not divisible");
}
//what is output of javascript
for(let i = 10; i >= 10 ; i--){
    console.log(i);
   }