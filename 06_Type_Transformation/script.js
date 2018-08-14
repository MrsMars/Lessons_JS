console.log(5 + "5");               // 55
console.log(typeof(5 + "5"));       // string

console.log("5" * "4");             // 20
console.log(typeof("5" * "4"));     // number
console.log("5" * "hi");            // NaN
console.log(typeof("5" * "hi"));    // number

console.log("------------------------------------------");

console.log("5" == 5);      // true
console.log("0" == false);  // true
console.log(0 == false);    // true
console.log("5" == true);   // false
console.log("" == false);   // true
console.log(null == false);     // false
console.log(null == true);      // false
console.log(null == null);      // true
console.log(undefined == false);  // false
console.log(undefined == true);   // false
console.log(undefined == null);   // true
console.log(undefined == undefined);   // true

console.log("------------------------------------------");

console.log(Number("551"));             // 551
console.log(typeof(Number("551")));     // Number
console.log(String(551));               // 551
console.log(typeof(String("551")));     // string
console.log(Boolean(1));                // true
console.log(typeof(Boolean("551")));    // boolean

console.log("------------------------------------------");

console.log(!!5);       // true
console.log(!!0);       // false
console.log(+true);     // 1
console.log(+false);    // 0


console.log(typeof(345 + ""));      // string
console.log(typeof +"43444");       // number

console.log(+"")            // 0
console.log(!!NaN)          // false
console.log(!!0)            // false
console.log(!!null)         // false
console.log(!!undefined)    // false

console.log("------------------------------------------");

var number = 22;
console.log(typeof number.toString());  // String
number = 45;
console.log(number.toString(3));        // 1200
number = 5;
console.log(number.toString(2));        // 101

console.log(typeof false.toString());   // string
console.log(typeof String(Infinity));   // string
console.log(typeof String(NaN));        // string

console.log("------------------------------------------");

console.log(parseInt("45 px"));            // 45
console.log(parseInt("45 px", 10));        // 45 and SS

console.log(parseFloat("12.45 em"));        // 12.15

console.log("------------------------------------------");

var n = 5;
console.log(n.value);       // undefined
n = "hello";
console.log(n.value);       // undefined
n = null;       // or undefined
console.log(n.value);       // ERROR


