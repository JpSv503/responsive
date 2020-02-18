$(function(){
    console.log("Jquery is running");
    
    $("#search").keyup(function(){
        let search = $("#search").val();
        console.log(search);
    });
});