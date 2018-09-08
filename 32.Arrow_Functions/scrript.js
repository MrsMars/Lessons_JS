let sum_1 = (x, y) => x + y;                // like return
let a = sum_1(4, 5);                        // 9
let b = sum_1(10, 5);                       // 15

let sum_2 = (x, y) => console.log(x + y);   // function
sum_2(4, 5);                                // 9
sum_2(10 ,5);                               // 15

var square_1 = n => n * n;              // one parameter
console.log(square_1(5));               // 25
console.log(square_1(6));               // 36
console.log(square_1(-7));              // 49

var square_2 = n => {               // some parameters
    let result = n * n;
    return result;
}
console.log(square_2(5));           // 25

///////////////////////////////////////////////////////////

let user = (userName, userAge) => ({name: userName, age: userAge});

let tom = user("Tom", 34);
let bob = user("Bob", 25);

console.log(tom.name, tom.age);     // Tom, 34
console.log(bob.name, bob.age);     // Bob, 25

////////////////////////////////////////////////////////////

var hello = () => console.log("Hello world");
hello();        // Hello world
hello();        // Hello world

