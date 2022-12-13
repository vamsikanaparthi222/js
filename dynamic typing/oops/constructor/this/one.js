// this is a pointer or keyword  "to pointing to current object "{inside a class}
//access class members using "this"
class Account{
    min_Bal = 1000;
    acc_bal = 0;

    deposite_Amount(amount){
        this.acc_bal = this.acc_bal +amount
    }
    get_bal(){
        return this.acc_bal
    }
}
let a1 = new Account()
let a2 = new Account()
a1.deposite_Amount(2000);
a2.deposite_Amount(3000);
console.log(a1)
console.log(a2)
let r1 = a1.get_bal()
console.log(r1);
let r2 = a2.get_bal()
console.log(r2);