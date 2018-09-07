function outer(){
    
    let x = 5;
    
    function inner(){
        x++;
        console.log(x);
    };
    
    return inner;
}

let fn = outer();       // fn == inner

fn();   // 6
fn();   // 7    
fn();   // 8

/////////////////////////////////////////////////////

function multiply(n){
    var x = n;
    return function(m){return x * m;};
}

var fn1 = multiply(5);
var result1 = fn1(6);   // 30
console.log(result1);   // 30

var fn2 = multiply(4);
var result2 = fn2(6);   // 24
console.log(result2);   // 24

/////////////////////////////////////////////////////

function multiply_2(n){
    var x = n;
    return function(m){return x * m;};
}

var result = multiply_2(5)(6);  // 30
console.log(result);            // 30

/////////////////////////////////////////////////// IIFE    -   Immediately Invoked Function Expression

(function(){
    console.log("Hello, World");        // Hello, World
}());

(function (n){
    var result = 1;
    for(var i = 1; i <= n; i++)
        result *= i;
    console.log("Factory of number " + n + " is equal to " + result);       // Factory of number 4 is equal to 24
}(4));  



