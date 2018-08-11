console.log('f');       // f - it is a string, that is 1 long

console.log("Another \
very long \
string");                  // Another very long string"

console.log("Another \nvery long \nstring"); /* Another 
                                                very long 
                                                string"   
                                             */

console.log("Another \"very\" long string");    // Another "very" long string"

var str = "Another \"very\" long string"
console.log(str.charAt(0));             // A
console.log(str.substring(10));         // ery" long string
console.log(str.substring(10, 21));     // ery" long s
console.log(str.substr(14, 4));         // ion
console.log(str.slice(-10));            // ong string
console.log(str.indexOf("n"));          // n
console.log(str.lastIndexOf("n"));      // 12

console.log(str.replace("very", "veeery")); // Another "veeery" long string"
console.log(str.split(" "));        // {"Another", ""very"", "long", "string"}

console.log(str[2]);            // o
