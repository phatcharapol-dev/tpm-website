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

// Lazy Load
!function(window){
	var $q = function(q, res){
		  if (document.querySelectorAll) {
			res = document.querySelectorAll(q);
		  } else {
			var d=document
			  , a=d.styleSheets[0] || d.createStyleSheet();
			a.addRule(q,'f:b');
			for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
			  l[b].currentStyle.f && c.push(l[b]);
  
			a.removeRule(0);
			res = c;
		  }
		  return res;
		}
	  , addEventListener = function(evt, fn){
		  window.addEventListener
			? this.addEventListener(evt, fn, false)
			: (window.attachEvent)
			  ? this.attachEvent('on' + evt, fn)
			  : this['on' + evt] = fn;
		}
	  , _has = function(obj, key) {
		  return Object.prototype.hasOwnProperty.call(obj, key);
		}
	  ;
  
	function loadImage (el, fn) {
	  var img = new Image()
		, src = el.getAttribute('data-src');
		img.src = 'welder.jpeg';
	  img.onload = function() {
		if (!!el.parent){
			console.log(el);
		  el.parent.replaceChild(img, el)
		}else{
		  el.src = src;
		}
		fn? fn() : null;
	  }
	  img.src = src;
	}
  
	function elementInViewport(el) {
	  var rect = el.getBoundingClientRect()
  
	  return (
		 rect.top    >= 0
	  && rect.left   >= 0
	  && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
	  )
	}
  
	  var images = new Array()
		, query = $q('img.lazy')
		, processScroll = function(){
			for (var i = 0; i < images.length; i++) {
			  if (elementInViewport(images[i])) {
				loadImage(images[i], function () {
				  images.splice(i, i);
				});
			  }
			};
		  }
		;
	  // Array.prototype.slice.call is not callable under our lovely IE8 
	  for (var i = 0; i < query.length; i++) {
		images.push(query[i]);
	  };
  
	  processScroll();
	  addEventListener('scroll',processScroll);
  
  }(this);




  