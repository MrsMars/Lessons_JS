var Person = {
    consructor: function(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
    },
    greet: function(){
        console.log("Hi! My name is " + this.name);
    }
};

var person_1,
    person_2,
    person_3;

person_1 = Object.create(Person).consructor("John", 27, "male");
person_2 = Object.create(Person).consructor("Jess", 21, "female");
person_3 = Object.create(Person).consructor("Jack", 23, "male");

person_1.greet();   // Hi! My name is John
person_2.greet();   // Hi! My name is Jess
person_3.greet();   // Hi! My name is Jack

console.log(Person.isPrototypeOf(person_1));        // true

console.log("---------------------------------------------------");

var WebDeveloper = Object.create(Person);
WebDeveloper.consructor = function(name, age, gender, skills){
    Person.consructor.apply(this, arguments);
    this.skills = skills || [];
    return this;
};
WebDeveloper.develop = function(){
    console.log("Working...");
};

var developer = Object.create(WebDeveloper).consructor("Mike", 21, "male", ["html", "CSS", "js"]);

console.log(developer.skills);      // ["html", "CSS", "js"]
developer.develop();                // Working...
console.log(developer.name);        // Mike
developer.greet();                  // Hi! My name is Mike