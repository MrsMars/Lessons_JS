function greet_1(name){
    return "Hello " + name;
}

// anonymous function
var greet_2 = function(name){
    return "Hello " + name;
};

console.log(greet_1("John").toUpperCase());   // HELLO JOHN
console.log(greet_2("John").toUpperCase());   // HELLO JOHN

var greet_3 = function(name){
    console.log(arguments);         // ["Jack", 34, 23, 26]
    console.log(arguments[1]);      // 34
    console.log(arguments.length);  // 4
    return "Hello " + name;
};

console.log(greet_3("Jack", 34, 23, 26).toUpperCase());     // HELLO JACK

console.log("----------------------------------------");

// transfer func to complied after comlied main function 
var func_1 = function(callback){
    var name = "John";
    callback(name);
};

func_1(function(n){
    console.log("Hello " + n);      // Hello John
});

console.log("----------------------------------------");

// return func
var func_2 = function(){
    return function(){
        console.log("Hi");
    }
};

func_2()();         // Hi

console.log("----------------------------------------");

var greet_3 = (function(name){
    return "Hello " + name;
}("John"));

console.log(greet_3);           // Hello John