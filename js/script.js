$(document).ready(function(){

  'use strict';

  ///hover container lang menu
  $("#lang-menu").hover(
  	function(){
      	$(this).addClass("cls-border-lang");
      	$(this).children().eq(0).addClass("cls-borderbottom-lang");
	  	$("#lang-menu ul").stop().slideToggle(100);
    },
    function(){
		$(this).removeClass("cls-border-lang");
      	$(this).children().eq(0).removeClass("cls-borderbottom-lang");
        $("#lang-menu ul").stop().slideToggle(100);
    }
);

  /// click languages
  $("#lang-menu ul li").on("click", function(){
	//select lang and apply changes
	$lang = $(this).text();
    $("#lang-menu div").text($lang);
  });

  /* Scroll */
  var scrollBtn = $('.scroll');

  $(window).scroll(function(){

    scrollBtn = $(this).scrollTop() >= 630 ? scrollBtn.show() : scrollBtn.hide();
  });
    scrollBtn.click(function(){
      $("html,body").animate({ scrollTop: 0 }, 1000);
  });

});

