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
$grid.isotope({ filter: '.maintenance-overhaul-gearbox' });
// filter ProductC
$grid.isotope({ filter: '.welding-installation' });

// filter ProductB
$grid.isotope({ filter: '.sparepart-modifly' });

// filter .ProductA
$grid.isotope({ filter: '.machine-design' });

// Carousel auto off
$('.carousel').carousel('pause');


  