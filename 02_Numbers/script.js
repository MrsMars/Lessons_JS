console.log(5);                 // 5             
console.log(0);                 // 0
console.log(300000000000);      // 300000000000
console.log(0xffffccc);         // 16x   -  268434636        or 0X...
console.log(0345);              // 8x    -  229     ( number with 0 and the others are less than 8)
console.log(0349);              // 10x   -  349

console.log(12.45);         // 12.45
console.log(.45);           // 0.45

console.log(1.34e4);        // 13400    or E4
console.log(4.5E-3);       // 0.0045    or e-3

console.log("-------------------------");

var n = 5000,
    N = new Number(4000);       

console.log(typeof n);          // number
console.log(typeof N);          // object

console.log(N.toFixed(2));      // 4000.00
console.log(n.toFixed(2));      // 5000.00      // numder => object; object.toFixed; delete object
console.log(2 .toFixed(2));     // 2.00

console.log("-------------------------");

console.log(5 > 10);          // false
console.log(5 < 10);          // true
console.log(10 >= 10);        // true
console.log(8 <= 10);         // true
console.log(10 == 10);        // true
console.log(10 == "10");      // true
console.log(10 === 10);       // true
console.log(10 === "10");     // false
console.log(10 != 10);        // false
console.log(10 != "10");      // false
console.log(10 !== 10);       // false
console.log(10 !== "10");     // true

console.log("-------------------------");

console.log(typeof Infinity);       // number
console.log(Infinity + 1000);       // Infinity
console.log(50 / 0);                // Infinity
console.log(-5 / 0);                // -Infinity
console.log(0 / 0);                 // NaN
console.log(Infinity / Infinity);   // NaN
console.log(Math.sqrt(-5));         // NaN
console.log(NaN === NaN);           // false

console.log("-------------------------");

console.log(0.2 + 0.1);         // 0.30000000000000004
