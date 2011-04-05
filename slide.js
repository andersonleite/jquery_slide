
		
	  	var currentPosition = 0;
		var slideWidth = $('.slide').width();
		var slides = $('.slide');
		var numberOfSlides = slides.length;		
		
		$('#slidesContainer').css('overflow', 'hidden');

		slides.wrapAll('<div id="slideInner"></div>').css({
			'float' : 'left',
			'width' : slideWidth
		});


		$('#slideInner').css('width', slideWidth * numberOfSlides);
		
		$('#slideshow')
		.prepend('<span class="control" id="leftControl">Move left</span>')
		.append('<span class="control" id="rightControl">Move right</span>');
		
		$("#slideshow").mouseenter(function() {
				$("#rightControl").show();
				$("#leftControl").show();
			}).mouseleave(function() {
				$("#rightControl").hide();
				$("#leftControl").hide();
		});


		$('.control').click(function(){
			if ($(this).attr('id')=='leftControl') {
				if (currentPosition == 0) {
				  currentPosition = numberOfSlides-1;
				} else {
				  currentPosition = currentPosition - 1;
				}
			} else {
				if (currentPosition == numberOfSlides-1) {
				  currentPosition = 0;
				} else {
				  currentPosition = currentPosition + 1;
				}

			}

			$('#slideInner').stop().animate({
			'marginLeft' : slideWidth*(-currentPosition)
			});
		});
		
			



