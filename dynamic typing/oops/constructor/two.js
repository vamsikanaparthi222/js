// construct is a special methode "to initialize object value"
//it excute automatically at the time of object creation
//we can't invoke in constructor methode
class Account{
    acc_id;
    acc_Name;
    constructor(id,Name){
        this.acc_id = id;
        this.acc_Name = Name;
    }
}
let a1 = new Account(01,"V")
let a2 = new Account(02,'A')
console.log(a1);
console.log(a2);
