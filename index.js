$(document).ready(function(){
    
    
    
    setInterval(function(){
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var millisecond = date.getMilliseconds();
        
        if (hour > 12) {
            console.log (hour-12);
            hour-=12;
        }
        
        
        
        
        
        
        
        $("#hour").text(hour);
        $("#minute").text(date.getMinutes());
        $("#second").text(date.getSeconds());
        $("#millisecond").text(date.getMilliseconds());

    }, 100);
    
    
    });
//    setInterval( function() {
//        var hours = new Date().getHours();
//        $("#hour").html(( hours < 10 ? "0" : "" ) + hours);
//
//    }, 1000);
//    
//    
//    
//    setInterval( function() {
//	       var minutes = new Date().getMinutes();
//	       $("#minute").html(( minutes < 10 ? "0" : "" ) + minutes);
//        
//    },1000);
//    
//    
//    setInterval( function() {
//	       var milliseconds = new Date().getSeconds();
//	       $("#minute").html(( minutes < 10 ? "0" : "" ) + milliseconds);
//        
//    },1000);
//    
//    setInterval( function() {
//	       var minutes = new Date().getMinutes();
//	       $("#minute").html(( minutes < 10 ? "0" : "" ) + minutes);
//        
//    },1000);
 
   