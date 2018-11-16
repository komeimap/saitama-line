$(function(){
	$('a[href^="#pages"]').on('click', function(){
		var speed = 1100;
		var href= $(this).attr('href');
		var target = $(href === '#' || href === '' ? 'html' : href);
		var position = target.offset().top-40;
		$('body,html').stop(false, false).animate({scrollTop:position}, speed, 'easeInOutQuint');
		return false;
	});
});
