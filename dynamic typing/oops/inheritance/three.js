class A{
    constructor(){
        console.log("gm");
    }
}
class B extends A{
    get_details(){
        console.log("gn");
    }
}
let a2 = new B()
a2.get_details()