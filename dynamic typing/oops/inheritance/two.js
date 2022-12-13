class User {
    constructor(){
        console.log("constructor");
    }
    get_address(){
        console.log("address");
    }
}
class Savings_Account extends User{
    open_account(){
        console.log("open account succesfully");
    }
}
let a1 = new User()
a1.get_address()