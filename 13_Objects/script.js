var person = {
    name: "Allo",
    age: 20,
    gender: "male"
}

person.age = 25;
person.userId = 223232322;

console.log(person.name);
console.log(person["age"]);
console.log(person.gender);

console.log(person);    // {name: "Allo", age: 25,  gender: "male", userId: 223232322 }

console.log("-----------------------------------------------");

// second way
var object_2 = new Object();
object.property = "value";

// third way
var object_3_1 = Object.create(null);
console.log(object_3_1);                            // Object {}

var object_3_2 = Object.create(x: 10, y: 20);
console.log(object_3_2);                            // Object {x: 10, y: 20}
console.log(object_3_2.hasOwnProperty("x"));        // false

object_3_2.x = 20;
console.log(object_3_2.hasOwnProperty("x"));        // true
console.log(object_3_2);                            // // Object {x: 20, x: 10, y: 20}
console.log(object_3_2.x);              // 20

delete object_3_2.x;
console.log(object_3_2);                            // Object {x: 10, y: 20}

console.log("x" in object_3_2);     // true
console.log("w" in object_3_2);     // false

console.log(object_3_2.z);          // undefined
console.log("z" in object_3_2);     // false

object_3_2.z = undefined;
console.log(object_3_2.z);          // undefined
console.log("z" in object_3_2);     // true