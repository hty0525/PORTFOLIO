
	
	
	$(document).ready(function(){ 	//제이쿼리 시작
	
	//헤더쪽
	
	/* $(window).scroll(function(){
			if($(this).scrollTop() > 30){//outerHeight('#header')//외부의높이//헤더의 높이를 벗어날때!!
				$('.sub_nav').css("display","none");
			}else{
				$('.sub_nav').css("display","block");
			}
		}); */


	//롤링 배너입니다
	
	
	fn_article3('roll_box','roll_button',true);
	
	var night = $(".night").children("*");
	


	night.addClass("shooting_star");
	
	
	
	
	//롤링끝
	
	//퀵메뉴 스크롤
		$(window).scroll(function(){
			if($(this).scrollTop() > 300 ){//outerHeight('#header')//외부의높이//헤더의 높이를 벗어날때!!
				$('#quick').fadeIn("slow");
			}else{
				$('#quick').fadeOut("slow");
			}
		});//scroll end
		
		$('a#top').click(function(){
			$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
			return false;
			
		});
		
		$('a#alert').click(function(){
			alert('로그인 후 이용해주세요.');
			return false;
		});
		
		
//퀵메뉴 큰거 
		//	$("#quick")   $("#side_menu")
	$("#side_menu_button").click(function(){
		$("#side_menu").toggleClass("aside");
		if($("#side_menu").hasClass("aside")){
	$(".line_1").animate({top:"50%"},400,function(){
		$(".line_1").css({"transform":"translateY(-50%) rotate(45deg)","transition":"all 0.4s"})	
	});
	
	$(".line_2").animate({opacity:0},400);
	
	$(".line_3").animate({bottom:"50%"},400,function(){
	$(".line_3").css({"transform":"translateY(50%) rotate(-45deg)","transition":"all 0.4s"})});		
			
			
			$("#quick").animate({right:"260px"},500).animate({right:"260px"})
			$("#side_menu").animate({right:"-0px"},500).animate({right:"0px"});
			return false;
		}else{
	$(".line_1").css({"transform":" rotate(0deg)","transition":"all 0.4s"}).delay().animate({top:"25%"},400);
	
	$(".line_2").animate({opacity:1},400);
	
	$(".line_3").css({"transform":" rotate(0deg)","transition":"all 0.4s"}).animate({bottom:"25%"},400);		
			
			
			$("#quick").animate({right:15},400);
			$("#side_menu").animate({right:"-301px"},400);
			return false;
			
		}
		
	});

		
		//조이 이벤트쪽

		$(".sub_joy_box").hide();
		$(".sub_joy_box").first().show();

		$("div#joy_event_nav>li>a").hover(function(){
		   
		   $("div#joy_event_nav>li>a").removeClass("joy_font");
		   $(this).addClass("joy_font");

			  $(".sub_joy_box").hide();
		   
		   
		   var joy = $(this).attr("rel");
		   
		   
		   
		   $("#sub_"+joy+"_box").show();

		   
		});

		
		
//퀵메뉴 소메뉴
		

		$("div#quick>a").hover(
		function(){
			$(this).children("p:not(:animated)").fadeIn(500);
			},
		function(){
			$(this).children("p").fadeOut(500);
			
		});

	
	var owl = $('.owl-carousel');
		owl.owlCarousel({
		items: 4,
		margin: 15,
		loop: true,
		nav:false,
		paginationSpeed: 500,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true
      });
	  
	$('#play').click(function(){
		
    owl.trigger('play.owl.autoplay',[2000]);
	return false;
	});
	
	$('#stop').click(function(){
		
    owl.trigger('stop.owl.autoplay',[2000]);
	return false;
	});
	
	$('#next').click(function(){
		
		owl.trigger('next.owl');
		return false;
	});
	
	$('#prev').click(function(){
		
		owl.trigger('next.owl');
		return false;
	});
	
	

	
		
//대슬라이드 




//sns 반응형 슬라이드s

  $('.bxslider').bxSlider({
	mode: 'horizontal',// 가로 방향 수평 슬라이드
        speed: 500,        // 이동 속도를 설정
        pager: false,      // 현재 위치 페이징 표시 여부 설정
        moveSlides: 1,     // 슬라이드 이동시 개수
        slideWidth: 3000,   // 슬라이드 너비
        minSlides: 3,      // 최소 노출 개수
        maxSlides: 3,      // 최대 노출 개수
        slideMargin: 5,    // 슬라이드간의 간격
        auto: true,        // 자동 실행 여부
        autoHover: true,   // 마우스 호버시 정지 여부
        controls: false    // 이전 다음 버튼 노출 여부
  });


//반응형 상단 네비 박스 애니메이션

$("#menu_button_botton").on("click",function(){
	$(this).toggleClass("box");
	
	if($(this).hasClass("box")){
		
	//3단 햄버거 버튼 반응
	$(".no1").animate({top:"50%"},500,function(){
		$(".no1").css({"transform":"translateY(-50%) rotate(45deg)","transition":"all 1s"})	
	});
	
	$(".no2").animate({opacity:0},500);
	
	$(".no3").animate({bottom:"50%"},500,function(){
	$(".no3").css({"transform":"translateY(50%) rotate(-45deg)","transition":"all 1s"})});
	//3단 햄버거 반응끝
	$(this).animate({right:"81%"},1000).children("span").css("background","white");
	$("section#all_menu_box").animate({right:0,opacity:1},1000);
	return false;
	}else{
		
	//3단 햄버거 버튼 반응
	$(".no1").css({"transform":" rotate(0deg)","transition":"all 1s"}).delay().animate({top:"0%"},500);
	
	$(".no2").animate({opacity:1},1500);
	
	$(".no3").css({"transform":" rotate(0deg)","transition":"all 1s"}).animate({bottom:"0%"},500);
	//3단 햄버거 반응끝
	
	$("section#all_menu_box").animate({right:"-100%",opacity:0},1000);	
	$(this).animate({right:"30px"},1000).children("span").css("background","black");
	return false;
	};
});
	
	
	
	$("aside#small_side ul>a").click(function(){
		$(this).toggleClass("side_li");
	if($(this).hasClass("side_li")){
		$(this).children(".r").css({"transform":"rotate(45deg)", "transition":"1s all"});
		$(this).children(".l").css({"transform":"rotate(-45deg)", "transition":"1s all"});
		$(this).siblings("li").slideDown(400);
		return false;
	}else{
		$(this).children(".r").css({"transform":"rotate(-45deg)", "transition":"1s all"});
		$(this).children(".l").css({"transform":"rotate(45deg)", "transition":"1s all"});
		$(this).siblings("li").slideUp(400);
		return false;
	}
	return false;
	
		
		
	});
	
	//대슬라이드
	    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
	  speed: 700,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	  autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });



	});//jquery end