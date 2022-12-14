class RVRJC{
    col_Fee = 108000;
    my_Bal = 0;
    Regd_No;
    name;
    course;
    branch;
    section;
    date;
    constructor(v,Aa,m,s,i,al){
        this.Regd_No = v;
        this.name = Aa;
        this.course =m;
        this.branch = s;
        this.section = i;
        this.date =al;
    }
    open_Admission(){
        console.log("joined succesfully");
    }
    deposite_Amount(Amount){
        this.my_Bal = this.my_Bal + Amount        
    }
    get_recipt(){
        return this.my_Bal
    }
    attend_class(){
        console.log("regular");
    }
}
let A = new RVRJC(196,"vamsi","B.tech","EEE","B","2019")
A.deposite_Amount(50000)
console.log(A);
A.open_Admission()
A.attend_class()
let r1 = A.get_recipt()
console.log(r1);