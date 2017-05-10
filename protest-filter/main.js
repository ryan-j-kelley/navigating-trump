$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();
		var button = $(this);
		var filter = button.data("filter");

		if (filter === "reset") {
			$(".image").removeClass("show");
		} else {
			$(".image").addClass("show");
			// $(".image").removeClass("show");
			// $(".image" + ".show" + filter).toggleClass("show");
		}

	});

	$(".item").on("click", function (e) {

		var item = $(this);

		if (item.hasClass("active")) {
			item.removeClass("active");
		} else {
			item.addClass("active");
		}

	});

});
