let z = 10;

function displayZ(){
    
    let z = 20;
    
    {
        let z = 30;
        console.log("Block: ", z);          // Block:  30
    }
    
    console.log("Function: ", z);           // Function:  20
}

displayZ();
console.log("Global: ", z);                 // Global:  10

/////////////////////////////////////////////////////////////

var x = 10;

function displayX(){
    
    var x = 20;
    
    {
        var x = 30;
        console.log("Block: ", x);          // Block:  30
    }
    
    console.log("Function: ", x);           // Function:  30    !!!
}

displayX();
console.log("Global: ", x);                 // Global:  10

/////////////////////////////////////////////////////////////

const y = 10;

function displayY(){
    
    const y = 20;
    
    {
        const y = 30;
        console.log("Block: ", y);          // Block:  30
    }
    
    console.log("Function: ", y);           // Function:  20   
}

displayY();
console.log("Global: ", y);                 // Global:  10

/////////////////////////////////////////////////////////////

function bar(){   
    foo = "25";
}
bar();
console.log(foo);           // 25   -   global value







