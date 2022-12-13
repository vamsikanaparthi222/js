//create Account
class saving_Account{
    min_bal=500;   //property
    open_Account(){
        console.log("account open succesfully");
    }  //methode
    deposite(){
        console.log("deposite account succesfully");
    }
    withdraw(){
        console.log("withdraw ammount succesfully");
    }
    getstatement(){
        console.log("display stataement succesfull");
    }
    getbal(){
        console.log("display bal succesfully");
    }
    close_account(){
        console.log("close account succesfully");
    }
}
let a1 = new saving_Account();
let a2 = new saving_Account();
console.log(a1.min_bal);
console.log(a2.min_bal);
a1.open_Account()
a1.deposite()
a1.withdraw()
a1.getstatement()
a1.getbal()
a1.close_account()