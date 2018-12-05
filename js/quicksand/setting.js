
$(document).ready(function(){ 
	

	/*********************
	quicksand
	*********************/		
	$clientsHolder = $('#stage');
	$clientsClone = $clientsHolder.clone(); 
 
	$('#filter a').click(function(e) {
		e.preventDefault();
	 
		$filterClass = $(this).attr('class');
	 
		$('#filter li').removeClass('active');
		$(this).parent().addClass('active');
	 
		if($filterClass == 'all'){
			$filters = $clientsClone.find('li');
		} else {
			$filters = $clientsClone.find('li[data-type~='+ $filterClass +']');
		}
	 
	   $clientsHolder.quicksand( $filters, {
			duration: 1000,
			easing: 'easeInOutQuint'
		}, function(){
			
			/********************* Start zoom image *********************/	
			
			jQuery(function($) {
				$( ".lb_home" ).rlightbox();
				});			

			/********************* End zoom image *********************/	
			
		});
		
	});
});


