var main = function() {
	
	//conf
	var slideWidth = 970;
	var slideSpeed = 700;
	var slideInterval = 2000;
	var currentSlide = 1
	var currentMargin = (970 * currentSlide);
	
	//DOM
	var $display = $('.display');
	var $displayContainer = $display.find('.container');
	var $slides = $displayContainer.find('.slides');
	var $slide = $slides.find('.slide');
	
	var $navDisplay = $('#nav-display')
	var $navDisplayContainer = $navDisplay.find('.container').find('.row').find('.col-xs-4');
	var $indicatorUl = $navDisplayContainer.find('ul');
	var $indicatorLi = $indicatorUl.find('li');
	var $indicator = $indicatorLi.find('.indicator');
	var $leftButton = $navDisplayContainer.find('#btn-left');
	var $rightButton = $navDisplayContainer.find('#btn-right');
	
	var interval;
	
	function startSlides () {
		interval = setInterval(function() {
			$slides.animate({'margin-left': '-=' + slideWidth}, slideSpeed, function() {
				currentSlide++
				if (currentSlide >= $slide.length) {
					$slides.css('margin-left', 0);
					currentSlide = 1;
				};
			});
		}, slideInterval);
	};
	
	function stopSlides() {
		clearInterval(interval);
	};
	
	$display.on('mouseenter', stopSlides).on('mouseleave',startSlides);
	$navDisplay.on('mouseenter', stopSlides).on('mouseleave',startSlides);
	
	$leftButton.click(function() {
		if (currentSlide > 1) {
			$slides.animate({'margin-left': '+=' + slideWidth}, slideSpeed, function() {
			currentSlide--
			});
		} else {
			$slides.css('margin-left', -4850);
			$slides.animate({'margin-left': '+=' + slideWidth}, slideSpeed, function() {
			currentSlide = ($slide.length - 1);
			});
		}
	});
	
	$rightButton.click(function() {
		if (currentSlide < $slide.length) {
			$slides.animate({'margin-left': '-=' + slideWidth}, slideSpeed, function() {
			currentSlide++
			});
		} else {
			$slides.css('margin-left', 0);
			$slides.animate({'margin-left': '-=' + slideWidth}, slideSpeed, function() {
			currentSlide = (2);
			});
		}
	});
	
	$indicatorLi.click(function() {
		$indicator.removeClass('active');
		$(this).find('.indicator').toggleClass('active');
	});
	
	$('.ow-btn').click(function()  {
		$(this).next().toggleClass('hidden');
		$(this).toggleClass('active');
	});
	startSlides();
};

$(document).ready(main);