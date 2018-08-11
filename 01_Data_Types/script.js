            // simple types
var myNumber = 2525,
    myString = "Some string",
    myBool = true,
    myNull = null,
    myUndef = undefined;

console.log(myNumber);      // 2525
console.log(myString);      // Some string
console.log(myBool);        // true
console.log(myNull);        // null
console.log(myUndef);       // undefined

console.log(typeof(myNumber));      // number
console.log(typeof(myString));      // string
console.log(typeof(myBool));        // boolean
console.log(typeof(myNull));        // odject   -- error
console.log(typeof(myUndef));       // undefined

console.log("----------------------------------------------------");

            // object types
var obj = {name: "allega"},
    array = [1,2,3],
    regexp = /w+/g,
    func = function(){};

console.log(typeof(obj));       // object 
console.log(typeof(array));     // object
console.log(typeof(regexp));    // object  
console.log(typeof(func));      //  function

obj.name = "passive star";
array[1] = 323232323;

console.log(obj);           // {name: "passive star"}
console.log(array[1]);      // 323232323

console.log("----------------------------------------------------");

var a, b, c, d;
a = b = c = d = 5;      // d => 5, c => d, b => c, a => b 
