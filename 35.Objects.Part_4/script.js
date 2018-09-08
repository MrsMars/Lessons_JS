var user = {};

user.name = "Tom";
user.age = 26;
user.display = function(){console.log(user.name + " " + user.age);}

var hasNameProp_1 = "name" in user;
console.log(hasNameProp_1);           // true

var hasWeightProp_1 = "weight" in user;
console.log(hasWeightProp_1);         // false

// or

var hasNameProp_2 = user.name !== undefined;
console.log(hasNameProp_2);           // true

var hasWeightProp_2 = user.weight !== undefined;
console.log(hasWeightProp_2);         // false

// or

var hasNameProp_3 = user.hasOwnProperty('name');
console.log(hasNameProp_3);           // true

var hasWeightProp_3 = user.hasOwnProperty('weight');
console.log(hasWeightProp_3);         // false


for(var key in user){
    console.log(key + " : " + user[key]);
                                                /*
                                                    name : Tom
                                                    age : 26
                                                    display : function (){
                                                    
	                                                    console.log(user.name);
	                                                    console.log(user.age);
                                                    }
                                                */
}