function User(name, age){
    
    this.name = name;
    
    var _age = age;
    
    this.displayInfo = function(){document.write("Name: " + this.name + ", age: " + _age + "</be>");};
    
    this.getAge = function(){return _age;}
    this.setAge = function(age){
        if(typeof age === "number" && age > 0 && age < 110) _age = age;
        else{console.log("Invalid value");}
    }
};

var tom = new User("Tom", 26);
console.log(tom._age);          // undefined
console.log(tom.getAge());      // 26
tom.setAge(35);
console.log(tom.getAge());      // 35
tom.setAge("54");               // Invalid value