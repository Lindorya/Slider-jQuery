 
var interval = setInterval(function()
{  
    $("#carrousel ul").animate({"margin-left": -430}, function(){  
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first")); 
    });  
  }, 2000);  



$(".next").click(function () 
{
    clearInterval(interval);
    $("#carrousel ul").animate({marginLeft:-430},function()
           {
              $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
            })

});


$(".prev").click(function () 
{
    clearInterval(interval);
    $("#carrousel ul").animate({marginRight:-430},function()
           {
              $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
            })

});