function getFactorial(n){    
    if (n == 1)
        return 1;
    else
        return n * getFactorial(n - 1);    
}

var result1 = getFactorial(4);
console.log(result1);            // 24

    /*      
        var result = 4 * getFactorial(3);
        var result = 4 * 3 * getFactorial(2);
        var result = 4 * 3 * 2 * getFactorial(1);
        var result = 4 * 3 * 2 * 1; // 24
    */


///////////////////////////////////////////////

function getFibonachi(n)
{
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    else
        return getFibonachi(n - 1) + getFibonachi(n - 2);
}

var result2 = getFibonachi(8); //21 
console.log(result2); // 21