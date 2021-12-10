$(function(){
	/*var ht = $(window).height();
	$("section").css("height",ht);
	$("section").height(ht);//같은말
	
	$(".pannel_navi li").click(function(e){
		e.preventDefault(); //preventDefault리턴펄스랑 같음
		var x = $(this).index();
		
		$("ul.pannel").animate({left:x*-100+"%"});
		
			$(".pannel_navi li a").removeClass("on");
			$(this).find("a").addClass("on");
			return false;
	});*/



	
	 //initialising fullpage.js in the jQuery way
            $('#fullpage').fullpage({
                navigation: true,
                slidesNavigation: true,
				loopBottom: true,
            });

            // calling fullpage.js methods using jQuery
            $('#moveSectionUp').click(function(e){
                e.preventDefault();
                $.fn.fullpage.moveSectionUp();
            });

            $('#moveSectionDown').click(function(e){
                e.preventDefault();
                $.fn.fullpage.moveSectionDown();
            });
	
});
	