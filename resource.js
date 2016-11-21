/*global $*/
$(document).ready(function(){
    $("#resource").hide()
});
       

$(document).ready(function(){
    $("#flip").click(function(){
        $("#resource").slideToggle("slow");
    });
});