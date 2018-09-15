let user= {
    name: "Tom",
    age: 21,
    phone: "+375441234567",
    email: "tomb@gmail.com"
};

let {name, email} = user;
console.log(name);      // Tom
console.log(email);     // tomb@gmail.com

let {name: userName, email: mailAdress} = user;
console.log(userName);      // Tom
console.log(mailAdress);    // tomb@gmail.com

let users = ["Tom", "Sam", "Bob", "Ann", "Alice"];
let[first,,,fourth,] = users;

console.log(first);     // Tom
console.log(fourth);    // Ann

let people = [
    {peopleName: "Tom", age: 34},
    {peopleName: "Sam", age: 21},
    {peopleName: "Bob", age: 24}
];
let [,{peopleName}] = people;
console.log(peopleName);          // Sam

///////////////////////////////////////////////////////////

function display({name: userName, age: userAge}){console.log(userName, userAge);};
function sum([a, b, c]){console.log(a + b+ c);};

let user_3 = {name: "Alice", age: 33, email: "Alice@gmail.com"};
let numbers = [3, 5, 7, 8];

display(user_3);      // Alice 33
sum(numbers);       // 15


