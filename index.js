$(document).ready(function(){
    
    
    
    setInterval(function(){
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var millisecond = date.getMilliseconds();
        
        if (hour > 12) {
            hour -= 12;
        };
         if(hour === 0) {
             hour = 12;
        };
        
        if (hour < 10) {
            hour = ("0" + hour);
        };
        
        if (minute < 10) {
            minute = ("0" + minute);
        };
        
        if (second < 10) {
            second = ("0" + second);
        };
        
        $("#hour").text(hour);
        $("#minute").text(minute);
        $("#second").text(second);
        $("#millisecond").text(millisecond);

    }, 10);
    
    
    });