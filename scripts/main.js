var main = function() {
	
	$('.ow-btn').click(function()  {
		$(this).next().toggleClass('hidden');
		$(this).toggleClass('active');
	});
};

$(document).ready(main);