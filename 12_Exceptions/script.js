var myError = new ReferenceError("My error message");
console.log(myError.name);
console.log(myError.message);

throw myError;

var calculate = function(n){
    if(n > 10){
        throw new Error("n should be less than ten");
    }
    return n + 10;
};

try{
    calculate(20);
}
catch(e){
    console.log("Can't execute calculate: " + e.message);
}