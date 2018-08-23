var array_1 = [1,3,4],
    monts = ["January", "February", "March", "April"];

console.log(monts[3]);  // April
console.log(monts[4]);  // undefined

monts[4] = "May";
console.log(monts[4]);  // May

console.log(monts);         // (5) ["January", "February", "March", "April", "May"]
console.log(monts.length);  // 5

// Sparse array
monts[21] = "Something";
console.log(monts);         // (22) ["January", "February", "March", "April", "May", empty × 16, "Something"]
console.log(monts.length);  // 22 - (indexLast + 1)

console.log("-----------------------------------------------");

console.log(typeof monts);  // object

var myArray_1 = new Array(34);          // it will be its length
console.log(myArray_1);                 // (34) [empty × 34]

var myArray_2 = new Array(32, 2);
console.log(myArray_2);                 // (2) [32, 2]

var myArray_3 = [,,25];
console.log(myArray_3);                 // (3) [empty × 2, 25]
console.log(Array.isArray(myArray_3));  // true 

var myArray_4 = [2,3];
myArray_4[2] = "Something";
myArray_4["someProperty"] = "someValue";
console.log(myArray_4);                 // (3) [2, 3, "Something", someProperty: "someValue"]

var myArray_5 = [1,2,3,4,5,6];
console.log(myArray_5);                 // (6) [1, 2, 3, 4, 5, 6]
myArray_5.length = 3;
console.log(myArray_5);                 // (3) [1, 2, 3]

var myArray_6 = [1,2,3,4,5];
delete myArray_6[3];
console.log(myArray_6);                 // (5) [1, 2, 3, empty, 5]
console.log(myArray_6[3]);              // undefined

console.log("-----------------------------------------------");

var array_2 = ["First String", "Second String", "Third String"];

console.log(array_2.join());            // First String,Second String,Third String
console.log(array_2.join(', '));        // First String, Second String, Third String
console.log(array_2.join(' || '));      // First String || Second String || Third String

console.log(array_2.reverse());         // (3) ["Third String", "Second String", "First String"]
console.log(array_2);                   // (3) ["Third String", "Second String", "First String"]
console.log(array_2.reverse());         // (3) ["First String", "Second String", "Third String"]

console.log(array_2.sort());            // (3) ["First String", "Second String", "Third String"] => a, b, c

console.log(array_2.concat("Hello", ["Even More", "Something else"]));      // (6) ["First String", "Second String", "Third String", "Hello", "Even More", "Something else"]

console.log(array_2.slice(1));                      // (2) ["Second String", "Third String"]

console.log(array_2.splice(1,1,"Allo", "Hi"));      // ["Second String"]
console.log(array_2);                               // (4) ["First String", "Allo", "Hi", "Third String"]

array_2.push("JS");
console.log(array_2);               // (5) ["First String", "Allo", "Hi", "Third String", "JS"]

array_2.unshift("Hello");
console.log(array_2);               // (6) ["Hello", "First String", "Allo", "Hi", "Third String", "JS"]

console.log(array_2.pop());         // JS
console.log(array_2.pop());         // Third String
console.log(array_2);               // (4) ["Hello", "First String", "Allo", "Hi"]

console.log(array_2.shift());       // Hello
console.log(array_2.shift());       // First String
console.log(array_2);               // (2) ["Allo", "Hi"]