$(function(){

			$('#carousel').elastislide({
				imageW 		: 265,
				margin		: 20,
				border		: 0,
				easing		: 'easeInBack'
			});
			
			$(".es-carousel ul li").hover(function(){
				 $(this).children('span.detail').animate({left:"60px",zIndex:"1000"},{queue:false,duration:300});
				 $(this).children('span.zoom').animate({right:"60px",zIndex:"1000"},{queue:false,duration:300});

			}, function() {
				 $(this).children('span.detail').animate({left:"5px",zIndex:"-1"},{queue:false,duration:300});
				 $(this).children('span.zoom').animate({right:"5px",zIndex:"-1"},{queue:false,duration:300});
			});
			


			
});

