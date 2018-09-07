function display(){
    
    console.log("Good morning");
    
    display = function(){
        console.log("Good evening");
    }
}

display();      // Good morning
display();      // Good evening
display();      // Good evening

//////////////////////////////////////////////

function display_2(){
    
    console.log("Good morning");
    
    display_2 = function(){
        console.log("Good evening");
    }
}

var displayMessage_1 = display_2;
display_2();      // Good morning
display_2();      // Good evening
displayMessage_1();   // Good morning
displayMessage_1();   // Good morning
var displayMessage_2 = display_2;
displayMessage_2();   // Good evening
displayMessage_2();   // Good evening
