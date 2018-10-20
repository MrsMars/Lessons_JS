
$(":not(img[alt])").attr("alt", "jQuery");

// or
$("img").not("img[alt]").attr("alt", "jQuery");


var element = $("img");

// alt
var text = "";
for(var i = 0; i < element.length; i++){
    text += element[i].alt + "\n";
}
alert(text);

// class
text = "";
for(var i = 0; i < element.length; i++){
    text += element[i].className + "\n";
}
alert(text);




