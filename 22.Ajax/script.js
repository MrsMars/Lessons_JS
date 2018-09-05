// XMLHttpRequest realizes ajax-tech

var xhr = new XMLHttpRequest();

// prepare our request for transfering
xhr.open("GET", 'players.json', true);      // true - async
xhr.send();

// answers

xhr.onreadystatechange = function(){
    
    if(xhr.readyState != 4 ) return;    // isn't 
    
    if(xhr.status != 200){
        console.log(xhr.status + ": " + xhr.statusText);
    }
    else{
        console.log(xhr.responseXML);
    }
}












