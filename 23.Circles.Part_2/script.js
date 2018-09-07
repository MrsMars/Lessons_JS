var people = ["Tom", "Alice", "Bob", "Sam"];

// for
for(var i = 0; i < people.length; i++){
    console.log(people[i]);         
                                    /*  
                                        Tom
                                        Alice
                                        Bob
                                        Sam
                                    */
}

console.log("---------------------- 1 -----------------------");

// for...in
for(var index in people){
    console.log(people[index]);  
                                    /*  
                                        Tom
                                        Alice
                                        Bob
                                        Sam
                                    */
}

console.log("----------------------- 2 ---------------------");

// for...of
let users = ["Tom", "Bob", "Sam"];
for(let val of users){
    console.log(val);
                                    /*  
                                        Tom
                                        Bob
                                        Sam
                                    */
}

console.log("------------------------ 3 ---------------------");

var index = 0;
while(index < people.length){
    console.log(people[index]); 
                                    /*  
                                        Tom
                                        Alice
                                        Bob
                                        Sam
                                    */
    index++;
}

console.log("------------------------ 4 ---------------------");

var i = 0;
do{
    console.log(i * i); 
                                    /*
                                        0
                                        1
                                        4
                                    */                                    
    i++;
}
while(i < 3);

////////////////////////////////////////////////////////////////

var array = [ 1, 2, 3, 4, 5, 12, 17, 6, 7 ];
for (var i = 0; i < array.length; i++){
    if (array[i] > 10)
        break;
    document.write(array[i] + "</br>");
}











