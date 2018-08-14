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