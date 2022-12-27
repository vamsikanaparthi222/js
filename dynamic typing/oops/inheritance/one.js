class Account{
    constructor(open_account,deposite_ammount){
        this.open_account;
        this.deposite_ammount;    
    }
    open_account(){
        console.log("open account succesfully");
    }
}
class Savings_Account extends Account{
    deposite_ammount(){
        console.log("deposite ammount succesfully");
        
    } 
}
let a1 = new Savings_Account
a1.open_account() 
/* a1.deposite_ammount()
a1.open_account()


/*class Current_Account extends Savings_Account{
    withdraw_ammount(){
        console.log("withdraw ammount succesfully");
    }
}*/