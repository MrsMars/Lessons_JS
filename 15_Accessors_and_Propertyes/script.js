var person = {
    name: "Fill",
    _age: 20,
    get age(){
        return this._age;
    },
    set age(value){
        this._age = value < 0 ? 0 : value > 123 ? 123 : value;
    }
};

console.log(person.age);        // 20

person.age = 180;
console.log(person.age);        // 123

person.age = -5;
console.log(person.age);        // 0

person.age = 18;
console.log(person.age);        // 18

console.log(Object.getOwnPropertyDescriptor(person, "name"));   // {value: "Fill", writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(person, "age"));    // {get: ƒ, set: ƒ, enumerable: true, configurable: true}

Object.defineProperty(person, "gender", {
    value: "male",
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(person.gender);         // male
person.gender = "female";
console.log(person.gender);         // male

console.log("------------------------------------------------");

for(property in person){
    console.log(property);          // name, _age, age 
}
console.log(Object.keys(person));   // ["name", "_age", "age"]
