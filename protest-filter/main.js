$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();
		var button = $(this);
		var filter = button.data("filter");
		//this stores the data attribute
		$(".item.active").removeClass("active").removeClass("flipped");
		//this ensures that when you've already clicked one filter, when you click another it will show the front image
		if (filter !== "reset") {
			$("." + filter).addClass("active");
		}
		//adds the active class to make each button (except reset) show the image when clicked
	});

	$(".item").on("click", function (e) {

		var item = $(this);

		item.addClass("flipped");
		// this makes this image flip

		// if (item.hasClass("active")) {
		// 	item.removeClass("active");
		// 	} else {
		// 		item.addClass("active");
	}); //this made the image flip back and forth

});

// });
