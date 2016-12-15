var main = function() {
	
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
    
	//conf
	var slideSpeed = 700;
	var slideInterval = 2000;
	var currentSlide = 1
	var currentMargin = ($slideWidth * currentSlide);
    
    var $slidesWidth = $slides.width();
    var $slideWidth = $slide.width();
    var $slidesMinusOneWidth =  $slidesWidth - $slideWidth;

    
	var interval;
	
    //Functions
    
    var startSlide = function () {
		interval = setInterval(function() {
			$slides.animate({'margin-left': '-=' + $slideWidth}, slideSpeed, function() {
				currentSlide++
                console.log(currentSlide);
                indicate();
				if (currentSlide >= $slide.length) {
					$slides.css('margin-left', 0);
					currentSlide = 1;
                    indicate();
				};
			});
		}, slideInterval);
	};
    
    var stopSlide = function () {
        clearInterval(interval);
    };
    
    var slideLeft = function() {
        $leftButton.click(function() {
            if (currentSlide > 1) {
                $slides.animate({'margin-left': '+=' + $slideWidth}, slideSpeed, function() {
                    currentSlide--
                    indicate();
                });
            } else {
                $slides.css('margin-left', -$slidesMinusOneWidth);
                $slides.animate({'margin-left': '+=' + $slideWidth}, slideSpeed, function() {
                    currentSlide = ($slide.length - 1);
                    indicate();
                });
            };
        });
    };
    
    var slideRight = function() {
        $rightButton.click(function() {
            if (currentSlide < $slide.length) {
                $slides.animate({'margin-left': '-=' + $slideWidth}, slideSpeed, function() {
                    currentSlide++
                    indicate();
                });
            } else {
                $slides.css('margin-left', 0);
                currentSlide = 1;
                $slides.animate({'margin-left': '-=' + $slideWidth}, slideSpeed, function() {
                    currentSlide++
                });  
            };
        });
    };
    
    var indicate = function() {
        $indicator.removeClass('active');
        $indicatorLi.find('#indicator' + currentSlide).addClass('active');
    };
    
    var slideIndicator = function() {
        $indicatorLi.click(function() {
            var opo = $(this).val();
            if (opo === currentSlide) {
                alert("pizza");
            } else if (opo > currentSlide) {
                var toSlide = ($slideWidth * opo) - ($slideWidth * currentSlide);
                $slides.animate({'margin-left':'-=' + toSlide}, slideSpeed, function() {
                    currentSlide = opo
                    indicate();
                });
            } else {
                var toSlide = ($slideWidth * currentSlide) - ($slideWidth * opo);
                $slides.animate({'margin-left':'+=' + toSlide}, slideSpeed, function() {
                    currentSlide = opo
                    indicate();
                });
            };
        });
    };
    
    var indicatorHighlighter = function(x) {
        $indicatorLi.removeClass('active');
        if (x < 6) {
            $indicatorUl.find('#indicator' + x).addClass('active');
        } else {
            $indicatorUl.find('#indicator1').addClass('active');
        };
    };
    
    //Setup
    console.log($slide.length);
    startSlide();
	$display.on('mouseenter', stopSlide).on('mouseleave',startSlide);
	$navDisplay.on('mouseenter', stopSlide).on('mouseleave',startSlide);
    slideLeft();
    slideRight();
    slideIndicator();
    
	$('.ow-btn').click(function()  {
		$(this).next().toggleClass('hidden');
		$(this).toggleClass('active');
	});
};

$(document).ready(main);