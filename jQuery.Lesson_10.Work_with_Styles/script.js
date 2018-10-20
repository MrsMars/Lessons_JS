$("#div").css("font-size", "25px");
$("#div").css("color", "#31ded6");

$("#div").css("background-color", function(){
    return "#80cb88";
});

$("#div").css("width", "250px");
$("#div").css("height", function(){
    return $(this).width();
});



