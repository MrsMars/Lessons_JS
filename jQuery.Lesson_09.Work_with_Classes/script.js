var div = prompt("Blue or purple?\nPlease, press 1 or 2:");

while(div != 1 && div != 2){
    div = prompt("Wrong!\nPlease, press 1 or 2:");
}
console.log(div);

$('#div').attr("class", "div_" + div);

console.log($("#div").get(0).className);