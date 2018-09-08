// strings, numbers, bool - value transfer

function change_1(x){
    x = 2 * x;
    console.log("x in change: ", x);
}

var n = 20;
console.log("n before change: ", n);    // n before change: 10
change_1(n);                            // x in change: 20
console.log("n after change: ", n);     // n after change: 10    

// objects and arrays - ref transfer

function change_2(user){user.name = "Tom";}

var bob = {name: "Bob"};

console.log("Before change: ", bob.name);   // Bob
change_2(bob);
console.log("After change: ", bob.name);    // Tom

        // but...
function change_3(user){user = {name: "Tom"};}

var jack = {name: "Jack"};

console.log("Before change: ", jack.name);   // Jack
change_3(jack);
console.log("After change: ", jack.name);    // Jack

        // and 

function change_4(array){array[0] = 8;}
function change_4Full(array){array = [9, 8, 7];}

var numbers = [1, 2, 3];

console.log("Before change: ", numbers);        // [1, 2, 3]
change_4(numbers);
console.log("After change: ", numbers);         // [8, 2, 3]
change_4Full(numbers);              
console.log("After full change: ", numbers);    // [8, 2, 3]

