/*
    arguments   - array of arguments
    length      - number of arguments
    caller      - function that called this function
    name        - function name
    prototype   - function prototype
*/

function User(name, age){
    this.name = name;
    this.age = age;
};

var tom = new User("Tom", 26);

function display(){console.log("Your name: " + this.name);};

display.call(tom);      // Your name: Tom

////////////////////////////////////////////////////////////

function add(x, y){return x + y;}

console.log(add.call(this, 3, 8));      // 11
console.log(add.apply(null, [3, 8]));   // 11