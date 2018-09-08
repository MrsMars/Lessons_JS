var name = "Tom";
var age = 34;
var user = {name, age};
var teacher = {user, course: "JS"};

console.log(teacher.user);      // {name: "Tom", age: 34}
console.log(teacher.course);    // JS

/////////////////////////////////////////////////////////

var user_1 = {};

user_1.name = "Tom";
user_1.age = 26;
user_1.display = function(){
    console.log(user_1.name);
    console.log(user_1.age);
};

user_1.display();

    // or
var user_2 = {
    
    name: "Tom",
    age: 26,
    
    display: function(){
        console.log(this.name);
        console.log(this.age);
    }
};

/////////////////////////////////////////////////////////////

var user_3 = {
    
    name: "Tom",
    age: 26,
    
    display(){console.log(this.name, this.age);},
    move(place){console.log(this.name, " goes to ", place);}
};
user_3.display();           // Tom 26
user_3.move("the shop");    // Tom goes to the shop

/////////////////////////////////////////////////////////////

var user_4 = {};

user_4["name"] = "Tom";
user_4["age"] = 26;
user_4["display"] = function(){
    console.log(user_4.name);
    console.log(user_4.age);
};

user_4["display"]();        // Tom 26

/////////////////////////////////////////////////////////////

var user_5 = {
    
    name: "Tom",
    age: 26,
    "full name": "Tom Johns",
    
    "display info": function(){
        console.log(user_5.name);
        console.log(user_5.age);
    }
};

console.log(user_5["full name"]);
user_5["display info"]();

/////////////////////////////////////////////////////////////

var user_6 = {};

user_6.name = "Tom";
user_6.age = 26;

user_6.display = function(){
     
    console.log(user_6.name);
    console.log(user_6.age);
};
 
console.log(user_6.name); // Tom

delete user_6.name; 
// or delete user_6["name"];

console.log(user_6.name); // undefined



