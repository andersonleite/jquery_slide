jQuery.fn.slide = function(width) {
  return this.each(function(){
		
		var position = 0;
		var slideWidth = width;
		var slides = $('.slide');
		pages = slides.length;		
		
		$('#slidesContainer').css('overflow', 'hidden');

		slides
			.wrapAll('<div id="slideInner"></div>')
			.css({
			'float' : 'left',
			'width' : slideWidth
		});


		$('#slideInner').css('width', slideWidth * pages);

		$('#slideshow')
			.prepend('<span class="control" id="leftControl">left</span>')
			.append('<span class="control" id="rightControl">right</span>');

		manageControls(position);

		$('.control')
			.bind('click', function(){

			position = ($(this).attr('id')=='rightControl') ? position+1 : position-1;

			manageControls(position);
			$('#slideInner').animate({
				'marginLeft' : slideWidth*(-position)
			});

		});
			
  });
};

// manageControls: Hides and Shows controls depending on position
 function manageControls(position){
   // Hide left arrow if position is first slide
	if(position==0){ $('#leftControl').hide() } else{ $('#leftControl').show() }
	// Hide right arrow if position is last slide
   if(position==pages-1){ $('#rightControl').hide() } else{ $('#rightControl').show() }
 }


