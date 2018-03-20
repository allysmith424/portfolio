function displayProject() {

	$.get("/api/projects/" + $(this).data("name")).then(function() {

			$("#project-focus__img").attr("src", project.image);
			$("#project-focus__title").text(project.title);
			$("#project-focus__text").text(project.description);
			$("#project-focus__view-link").attr("href", project.link);
			$("#project-focus__github-link").attr("href", project.github);

			$(".secondPage__grid-container").removeClass("displayed").addClass("undisplayed")
			$(".secondPage__project-focus").removeClass("undisplayed").addClass("displayed");
			$(".title-stripe__nav", ".fp-controlArrow").addClass("undisplayed");

	});

};

$(document).ready(function() {

	console.log("Hello Ally");

	$('#fullpage').fullpage({
		sectionsColor: ['#ff6100', '#fff', '#fff', '#0e2c3a'],
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
		controlArrowColor: '#ff6100',
		menu: '#menu',
		scrollingSpeed: 1000
	});

	var $grid = $('.grid').isotope({

	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
	    columnWidth: '.grid-sizer'
	  }

	});

	$(".technology-filter").on("click", function() {

		console.log("Ally!");

		var filterValue = "."

		filterValue += $(this).data("filter");

		console.log(filterValue);

		$grid.isotope({ filter: filterValue });
		
	});

	$(".grid-item").on("click", function() {


		// displayProject();

	});

	$("#project-focus__close-btn").on("click", function() {

		$(".secondPage__grid-container").removeClass("undisplayed").addClass("displayed")

		$(".secondPage__project-focus").removeClass("displayed").addClass("undisplayed");

		$(".title-stripe__nav, .fp-controlArrow").removeClass("undisplayed").addClass("displayed");

	})

});