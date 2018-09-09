function Car(mName, MYear){
    
    this.name = mName;
    this.year = MYear;
    
    this.getCarInfo = function(){document.write("Model: " + this.name + ", year: " + this.year + "</br>");};
};

function User(pName, pAge){
    
    this.name = pName;
    this.age = pAge;
    
    this.driveCar = function(car){document.write(this.name + "drive: " + car.name + "</br>");};    
    this.displayInfo = function(){document.write("Name: " + this.name + ", age: " + this.age + "</br>");};
};

var tom = new User("Tom", 26);
tom.displayInfo();                          // Name: Tom, age: 26
var bentley = new Car("Bentley", 2004);
tom.driveCar(bentley);                      // Tomdrive: Bentley

console.log(tom instanceof User);   // true
console.log(tom instanceof Car);    // false
