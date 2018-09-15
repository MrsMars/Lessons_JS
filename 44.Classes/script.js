class Person{
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    static nameToUpper(person){return person.name.toUpperCase();}
    
    display(){console.log(this.name, this.age);}
}

class Employee extends Person{
    
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    
    display(){
        super.display();
        console.log("Employee in", this.company);
    }
    
    work(){console.log(this.name, "is hard working");}
}

let tom = new Person("Tom", 34);
console.log(Person.nameToUpper(tom));           // TOM
let bob = new Employee("Bob", 36, "Google");
tom.display();
bob.display();
bob.work();

                    /*
                        Tom 34
                        Bob 36
                        Employee in Google
                        Bob is hard working
                    */