// this ///////////////////////////////////////////////////////////////
var greet_1 = function(){
    return "Hi! My name is " + this.name;
}

var person_1 = {
    name: "John",
    greet: greet
};
var person_2 = {
    name: "Bob",
    greet: greet
};

console.log(person_1.greet());        // Hi! My name is John
console.log(person_2.greet());        // Hi! My name is Bob
console.log(greet());                 // Hi! My name is [object Window]

// call and apply ///////////////////////////////////////////////////////
var greet_2 = function(greeting){
    return greeting "! My name is " + this.name;
}

var person_1 = {
    name: "John",
    greet: greet
};
var person_2 = {
    name: "Bob",
    greet: greet
};

console.log(person_1.greet("Hi"));                          // Hi! My name is John
console.log(person_2.greet().call(person_1, "Bonjour"));    // Bonjour! My name is John
console.log(person_2.greet().call(person_1, ["Bonjour"]));  // Bonjour! My name is John

// bind //////////////////////////////////////////////////////////////////

var bound = greet_2.bind(person_2);
console.log(bound("Hello there"));          // Hello there! My name is Bob