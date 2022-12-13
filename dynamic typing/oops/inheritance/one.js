class Account{
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
a1.deposite_ammount()


/*class Current_Account extends Savings_Account{
    withdraw_ammount(){
        console.log("withdraw ammount succesfully");
    }
}*/