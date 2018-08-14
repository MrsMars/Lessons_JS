var i = 5;              // global

var func = function(){
    var i = 10;         // local    (only functions creates local values)
    console.log(i);     // 10
    
    var innerFunc = function(){
        var i = 15;
        console.log(i);     // 15
    };
    innerFunc();
};

func();