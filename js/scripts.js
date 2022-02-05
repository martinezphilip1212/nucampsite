// Jquery ReserveCamp
$(function () {
   $("#reserveButton").click(function () {
      $("#reserveModal").modal("toggle");
   });
});

// Jquery Login
$(function () {
   $("#loginButton").click(function () {
      $("#loginModal").modal("toggle");
   });
});

// Jquery Carousel
$(function () {
   $(".carousel").carousel({ interval: 2000 });
   $("#carouselButton").click(function () {
      if ($("#carouselButton").children("i").hasClass("fa fa-pause")) {
         $(".carousel").carousel("pause");
         $("#carouselButton").children("i").removeClass("fa fa-pause");
         $("#carouselButton").children("i").addClass("fa fa-play");
      } else {
         $(".carousel").carousel("cycle");
         $("#carouselButton").children("i").removeClass("fa fa-play");
         $("#carouselButton").children("i").addClass("fa fa-pause");
      }
   });
});
