var block = $("#div").clone();

block.html("<p>New article</p>");
block.css("font-size", "50px");
block.css("color", "#fff");
block.css("width", "250");
block.css("text-align", "center");

$("body").append(block);