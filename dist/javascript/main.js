$(document).ready(function() {

	//Flexslider
	$('.flexslider').flexslider({
		animation: "fade"
	});

	//Language Selector
	$('.langSelect .selected').click(function(){
		$('.langSelect .selector').fadeIn(200);
	});
	$('.langSelect a').click(function(e){
		e.preventDefault();
		$('.langSelect .selected').text($(this).text());
		$('.langSelect .selector').fadeOut(200);
	});

	$('.menuButton').click(function(){
		$('nav').toggleClass('open');
	});

});