function User(name, age){
    
    this.name = name;
    this.age= age;
    
    this.go = function(){document.write(this.name + " goes</br>");};
    this.displayInfo = function(){document.write("Name: " + this.name + ", age: " + this.age + "</br>");};
};
User.prototype.maxage = 110;

function Employee(name, age, comp){
    
    User.call(this, name, age);         // call to constructor 'User'
    
    this.company = comp;
    
    this.displayInfo = function(){document.write("Name: " + this.name + ", age: " + this.age + ", company: " + this.company + "</br>");};   // redefining
};
Employee.prototype = Object.create(User.prototype);     // prototype inheritance


var tom = new User("Tom", 26);
var bill = new Employee("Bill", 32, "Google");

tom.go();
bill.go();

tom.displayInfo();
bill.displayInfo();

console.log(tom.maxage);    // 110
console.log(bill.maxage);   // 110

