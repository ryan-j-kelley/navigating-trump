$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();

		var button = $(this);
		var filter = button.data("filter");

		if (filter === "all") {
			$(".item").removeClass("active");
		} else {
			$(".item.active").addClass("active");
			$(".item" + "." + filter).toggleClass("active");
		}

		//flip function

		/*
			$(".item").on("click", function (e) {
					e.preventDefault();

				var item = $(this);
				var back = flipped;

				if (item.hasClass("active")) {
					item.removeClass("active");
				} else {
					item.addClass("active");
				}
			}
		*/
		//end flip function

	});



});
