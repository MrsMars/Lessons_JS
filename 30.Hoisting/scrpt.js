console.log(foo);       // undefined
var foo = "Tom";

////////////////////////////////////

var c = a * b,
    a = 7,
    b = 3;
console.log(c);         // NaN

////////////////////////////////////

display();
var display = function(){
    console.log("Someth");  // TypeError
}