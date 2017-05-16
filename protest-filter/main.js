$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();
		var button = $(this);
		var filter = button.data("filter");

		$(".item.active").removeClass("active").removeClass("flipped");

		if (filter !== "reset") {
			$("." + filter).addClass("active");
		}
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
