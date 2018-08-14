console.log(true);
console.log(false);

console.log(5 === 5);   // true
console.log(5 === 6 );  // false

console.log(Boolean(5));    // true

//  Falsy values
console.log(Boolean(undefined));    // false
console.log(Boolean(null));         // fslse
console.log(Boolean(0));            // false
console.log(Boolean(NaN));          // false
console.log(Boolean(""));           // false

console.log(true && false);     // false
console.log(true && true);      // true

console.log(true || false);     // false
console.log(true || true);      // true

console.log(!true);      // false

{
    var a = 0,
        isTrue = true;
    
    isTrue && (a = 5);
    console.log(a);         // 5
}
{
    var someString = "Non-empty string";
    var newString = someString || "Default string";
    
    console.log(newString);         // "Non-empty string"
}
