(function($){  
  setInterval(function(){  
    $(".carrousel ul li:first-child").animate({"margin-left": -350}, 800, function(){  
        $(this).css("margin-left",0).appendTo(".carrousel ul");  
    });  
  }, 3500);  
})(jQuery);