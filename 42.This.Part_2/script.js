function foo(){
    var bar = "bar2";
    console.log(this.bar);
};

var o1 = {bar: "bar3", foo: foo};
var o2 = {bar: "bar4", foo: foo};

var bar = "bar1";

foo();      // bar1     - cause without 'use strict' this is a global value
o1.foo();   // bar3     - cause it's object context
o2.foo();   // bar4

///////////////////////////////////////////////////////////////////////////

var school = {
    title: "Oxford",
    courses: ["JS", "HTML", "CSS"],
    printCourses: function(){this.courses.forEach((course) => console.log(this.title, course))}
}
school.printCourses();      /*
                                Oxford JS
                                Oxford HTML
                                Oxford CSS
                            */