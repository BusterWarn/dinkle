var main = function() {
	
	$('.ow-btn').click(function()  {
		$(this).next().toggleClass('hidden');
	});
};

$(document).ready(main);