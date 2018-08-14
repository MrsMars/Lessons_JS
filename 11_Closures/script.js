// function + area of visibility = closures
// closures uses for saving values (otherwise it would be deleted) 
// & for getting different values every time it used

var func = function(){
    var i = 10;
    return function(){
        return i;
    }
};

var anotherFunc = function(){
    var i = 20;
    console.log(func()());          // 10
};

anotherFunc();

console.log("--------------------------------------");

var counter_1 = (function(){
    var count = 0;
    return function(){
        return count++;
    }
}());

console.log(counter_1());     // 0
console.log(counter_1());     // 1
console.log(counter_1());     // 2

console.log("--------------------------------------");

var counter_2 = (function(){
    var count = 0;
    return function(num){
        count = num !== undefined ? num : count;
        return count++;
    }
}());

console.log(counter_2());     // 0
console.log(counter_2());     // 1
console.log(counter_2());     // 2
console.log(counter_2(5));    // 5
console.log(counter_2());     // 6
console.log(counter_2(0));    // 0

console.log("--------------------------------------");

var counter_3 = function(num){
    counter_3.count = num !== undefined ? num : counter_3.count;
    return counter_3.count++;
}

counter_3.count = 0;

console.log(counter_3());     // 0
console.log(counter_3());     // 1
console.log(counter_3());     // 2
console.log(counter_3(5));    // 5
console.log(counter_3());     // 6
console.log(counter_3(0));    // 0
