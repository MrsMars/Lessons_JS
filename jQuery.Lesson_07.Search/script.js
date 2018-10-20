function valid(){
    var state = $("input[name='sex']:checked").val();
    console.log(state);
    $("#message").show();
    
    if(!state) return $("#message").html("<font style='color: red'>Please, fill in your gender!</font><br>");
    
    $("#message").hide();
}