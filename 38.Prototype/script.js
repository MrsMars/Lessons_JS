// prototype is like static property

function User(pName, pAge){
    
    this.name = pName;
    this.age = pAge;
    
    this.displayInfo = function(){document.write("Name: " + this.name + ", age: " + this.age + "</br>");};
};

User.prototype.hello = function(){document.write(this.name + " say: 'Hello!'</br>");};
User.prototype.maxAge = 110;

var tom = new User("Tom", 26);
tom.hello();

var john = new User("John", 21);
john.hello();

console.log(tom.maxAge);    // 110
console.log(john.maxAge);   // 110

User.prototype.maxAge = 97;
console.log(tom.maxAge);    // 97
console.log(john.maxAge);   // 97

tom.maxAge = 99;
console.log(tom.maxAge);    // 99   // property
console.log(john.maxAge);   // 97   // prototype