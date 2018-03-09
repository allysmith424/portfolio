$(document).ready(function() {

	console.log("Hello Ally");

	$('#fullpage').fullpage({
		sectionsColor: ['#ff6100', '#fff', '#0e2c3a', '#ff6100'],
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
		menu: '#menu',
		scrollingSpeed: 1000
	});

	var $grid = $('.grid').imagesLoaded( function() {

		$('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
		    columnWidth: '.grid-sizer'
		  }
		});

	});

});