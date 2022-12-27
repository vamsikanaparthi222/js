//inheritance using super keyword
class Account {
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}
class Savings_Account extends Account{
    constructor(id,name,amount){
        //using super keyword
        super(id,name)
        this.amount =amount;
    }
}
let c =new Savings_Account (101,"vamsi",95000);
console.log(c);