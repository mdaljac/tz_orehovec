jQuery(document).ready(function($) {
	var $root = $('html, body'),
		$window = $(window);
	$('a').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	$window.scroll(function() {
		if ($(this).scrollTop() > 250) $(".scroll-up").css("bottom", "20px");
		else $(".scroll-up").css("bottom", "-70px");
	});

});