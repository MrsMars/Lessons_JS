// JSON keeps objects, arrays, strings, numbers, booleans, others => null

var user_1 = {
    name: "Frank", 
    id: 42345,
    lastVisit: Date.now(),
    friends: [2452, 62523, 8969]
};

var userData_1 = JSON.stringify(user_1);

console.log(userData_1);                      // {"name":"Frank","id":42345,"lastVisit":1534673621222,"friends":[2452,62523,8969]}         
console.log(typeof userData_1);               // string

console.log(JSON.parse(userData_1));          // {name: "Frank", id: 42345, lastVisit: 1534673560030, friends: Array(3)}
console.log(typeof JSON.parse(userData_1));   // object


var user_2 = {
    name: "Bill", 
    id: 42345,
    lastVisit: Date.now(),
    friends: [2452, 62523, 8969],
    
    toJSON: function(){
        return {
            name: this.name,
            lastVisit: this.lastVisit
        }
    }
};

var userData_2 = JSON.stringify(user_2);

console.log(userData_2);                    // {"name":"Bill","lastVisit":1534673978156}
console.log(typeof userData_2);             // string

console.log(JSON.parse(userData_2));        // {name: "Bill", lastVisit: 1534674036568}
console.log(typeof JSON.parse(userData_2)); // object

