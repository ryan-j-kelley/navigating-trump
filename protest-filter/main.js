$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();
		var button = $(this);
		var filter = button.data("filter");

		if (filter === "reset") {
			$(".image").removeClass("show");
		} else {
			$(".image").addClass("show");
			// this is what makes the initial image show when you click the button

			//write something that makes the reset button also reset the social media links, not just clear it
		}

	});

	$(".item").on("click", function (e) {

		var item = $(this);

		item.addClass("active");
		// this makes this image flip

		// if (item.hasClass("active")) {
		// 	item.removeClass("active");
		// 	} else {
		// 		item.addClass("active");
	}); //this made the image flip back and forth

});

// });
