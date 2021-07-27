$(document). ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document). ready(function() {
	$('.header__menu').click(function(){
       $('.header__burger, .header__menu').removeClass('active');
       $('body').removeClass('lock');
	});
});