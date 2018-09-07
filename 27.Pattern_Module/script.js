let foo = (function(){
    
    let obj = {greeting: "hello"};
    
    return {
        display: function(){
            console.log(obj.greeting);
        }
    }                                       // API
})();
foo.display();      // hello

//////////////////////////////////////////////////

let calculator = (function(){
    
    let data = {number: 0};
    
    return{
        sum: function(n){
            data.number += n;
        },
        substract: function(n){
            data.number -= n;
        },
        display: function(){
            console.log("Result: ", data.number);
        }
    }
})();

calculator.sum(10);
calculator.sum(3);

calculator.display();       // Result: 13
calculator.substract(4);    
calculator.display();       // Result: 9