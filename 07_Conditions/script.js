if (true) console.log("Its true");      // Its true
if (false) console.log("Its true");     // 

var n = 5;
if (n > 3){
    n *= 3;
    console.log(n);     // 15
}
else if (n < 3){
    n *= 7;
    console.log(n);     // 
}
else{
    n *= 5;
    console.log(n);     // 
}

console.log("------------------------------------------------");

var name = "John", homecity;

if (name === "Jack"){
    homecity = "Boston";
}
else if (name === "John"){
    homecity = "LA";
}
else{
    homecity = "Minsk";
}
    
console.log(homecity);          // LA         
    
switch(name){
    case "Jack": homecity = "Boston"; break;
    case "John": homecity = "LA"; break;
    case "Bill": homecity = "Minsk"; break;
    default: homecity = "Grodno";
}

console.log(homecity);          // LA   

console.log("------------------------------------------------");

var x = 15,
    text;

text = x > 10 ? "x is much than ten" : "x is less or equal to ten";         
text = x > 10 ? "x is much than ten" : x < 10 ? "x is less than ten" : "x is equal to ten";      