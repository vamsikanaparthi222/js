//inheritance using super keyword
class Account {
    constructor(id,name,msg){
        this.id = id;
        this.name = name;
        this.msg = msg;
        open_account()={
            
        }
    }
}
class Savings_Account extends Account{
    constructor(id,name,amount,msg){

        //using super keyword
        super(id,name,msg)
        this.amount =amount;
    }
}
let c =new Savings_Account (101,"vamsi",95000,"msg");
console.log(c);