var Person, 
    person_1, person_2,
    Developer,
    developer_1;

Person = function(name){
    this.name = name;
};

Person.prototype.greet = function(){
    console.log("Hello, my name is " + this.name);
}

Developer = function(name, skills){
    Person.apply(this, arguments);
    this.skills = skills || [];
};

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

developer_1 = new Developer("John", ["C#", "C++", "PHP"]);
console.log(developer_1.name);              // John
console.log(developer_1.skills);            // ["C#", "C++", "PHP"]
developer_1.greet();                        // Hello, my name is John

console.log(developer_1 instanceof Developer);      // true
console.log(developer_1 instanceof Person);         // true
