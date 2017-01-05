(function($){  
  setInterval(function(){  
    $(".carrousel ul li:first-child").animate({"margin-left": -430}, 800, function(){  
        $(this).css("margin-left",0).appendTo(".carrousel ul");  
    });  
  }, 2000);  
})(jQuery);