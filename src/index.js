class Person {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
let p = new Person("姜帅杰")
alert(p.getName())