class Employee{
    min_bal=1000;
    acc_no=0;
    name;
    dob;
    mobile;
    location;
    pin;
    constructor(a,b,c,d,e,f){
        this.acc_no = a;
        this.name = b;
        this.dob = c;
        this.mobile = d;
        this.location = e;
        this.pin = f;
    }
}
let a1 = new Employee(01,"vamsi","03/01/2001","7673920027","kollipara",522304)
let a2 = new Employee(02,"daniel","03/01/2001",7673920027,"kollipara",522304)
console.log(a1);
console.log(a2);