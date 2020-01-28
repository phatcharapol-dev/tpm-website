	// Landing Page
$('a[href^="#"]').on('click', function(event) {
var target = $( $(this).attr('href') );
if( target.length ) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: target.offset().top-80,
		scrollBottom: target.offset().bottom
	}, 800);
} });

//Button porfolio
var btnfull = document.getElementsByClassName('btn-outline') ;
for (var i = 0; i < btnfull.length; i++) {
btnfull[i].addEventListener("click", function() {
	var current = document.getElementsByClassName("btn-outline active");
	current[0].className = current[0].className.replace(" active", "");
	this.className += " active";
});
}
// Initial Isotope
var $grid = $('.grid').isotope({
// options
});
// Filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
var filterValue = $(this).attr('data-filter');
$grid.isotope({ filter: filterValue });
});
// filter ProductD
$grid.isotope({ filter: '.productD' });
// filter ProductC
$grid.isotope({ filter: '.productC' });

// filter ProductB
$grid.isotope({ filter: '.productB' });

// filter .ProductA
$grid.isotope({ filter: '.productA' });

// Carousel auto off
$('.carousel').carousel('pause');


