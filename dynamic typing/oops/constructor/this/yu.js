class Account{
    firstName;
    lastName;
    age;
    location;
    constructor(name,last,rank,colony){
        this.firstName = name;
        this.lastName = last;
        this.age = rank;
        this.location = colony;
    }

}
let a1 =new Account("V","A",21,"guntur")
console.log(a1);