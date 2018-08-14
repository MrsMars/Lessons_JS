// null - is an empty value
// undefined - is a value absence

var temp,
    obj = {},
    a = [1, 2, 3, 4];

function greet(name){
    return "Hello " + name;
}
function greet_2(name){}

console.log(temp);              // undefined
console.log(obj.property);      // undefined
console.log(a[4]);              // undefined

console.log(greet("Allo"));     // Hello Allo
console.log(greet());           // Hello undefined
console.log(greet_2(33));       // undefined
