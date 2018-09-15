var currentDate = new Date();
document.write(currentDate);            // Wed Sep 12 2018 11:44:53 GMT+0300 (Москва, стандартное время)

document.write("</br>");

var myDate1 = new Date(1359270000000);   
document.write(myDate1);                // Sun Jan 27 2013 11:00:00 GMT+0400 (Москва, стандартное время)

document.write("</br>");

var myDate2 = new Date("27 March 2008");
document.write(myDate2);                // Thu Mar 27 2008 00:00:00 GMT+0300 (Москва, стандартное время)

document.write("</br>");

var myDate3 = new Date("3/27/2008");
document.write(myDate3);                // Thu Mar 27 2008 00:00:00 GMT+0300 (Москва, стандартное время)

document.write("</br>");

var myDate4 = new Date(2012, 11, 25, 18, 30, 20, ); 
document.write(myDate4);                // Tue Dec 25 2012 18:30:20 GMT+0400 (Москва, стандартное время)

/////////////////////////////////////////// get data ///////////////////////////////////////////////////

document.write("</br>");

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var myDate5 = new Date();
var fullDate = "Today: " + myDate5.getDate() 
                + " " + months[myDate5.getMonth()] 
                + " " + myDate5.getFullYear() 
                + ", " + days[myDate5.getDay()];

document.write(fullDate);           // Today: 12 September 2018, Thursday

document.write("</br>");

var welcome,
    myDate6 = new Date(),
    hour = myDate6.getHours(),
    minute = myDate6.getMinutes(),
    second = myDate6.getSeconds();

if(second < 10){second = "0" + second;}
if(minute < 10){minute = "0" + minute;}
if(hour < 12){welcome = "Good morning";}
else if(hour < 17){welcome = "Good afternoon";}
else{welcome = "Good evening";}

document.write(welcome + ", current time: " + hour + ":" + minute + ":" + second);      // Good afternoon, current time: 12:07:36

/////////////////////////////////////////// set data ///////////////////////////////////////////////////

document.write("</br>");

var myData7 = new Date();

myData7.setDate(15);    
myData7.setMonth(6);    
myData7.setYear(2013);    

var fullDate7 = myData7.getDate() + " " + months[myData7.getMonth()] + " " + myData7.getFullYear() + ", " + days[myData7.getDay()];

document.write(fullDate7);                          // 15 July 2013, Tuesday  




