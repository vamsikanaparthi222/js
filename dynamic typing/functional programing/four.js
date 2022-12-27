//to check number is even
const isEven = (n)=>{
    return n%2==0
}

let printResult = (evenfn,num)=>{
    const isNumEven = evenfn(num)
    console.log(`the number ${num} is an even number ${isNumEven}`);
}
printResult(isEven,222)