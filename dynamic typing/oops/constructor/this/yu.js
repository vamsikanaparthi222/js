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
let a1 =new Account("V","A",21,"AP")
let a2 =new Account("VA","AL",21,"TS")
let a3 =new Account("VAM","ALE",21,"APTS")
console.log(a1);
console.log(a2);
console.log(a3);

module.exports =Account