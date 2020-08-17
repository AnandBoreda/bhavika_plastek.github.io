(function ($) {
  "use strict";
  /* ================ Revolution Slider. ================ */
  if ($(".tp-banner").length > 0) {
    $(".tp-banner").show().revolution({
      delay: 6000,
      startheight: 550,
      startwidth: 1140,
      hideThumbs: 1000,
      navigationType: "none",
      touchenabled: "on",
      onHoverStop: "on",
      navOffsetHorizontal: 0,
      navOffsetVertical: 0,
      dottedOverlay: "none",
      fullWidth: "on",
    });
  }
  if ($(".tp-banner-full").length > 0) {
    $(".tp-banner-full").show().revolution({
      delay: 6000,
      hideThumbs: 1000,
      navigationType: "none",
      touchenabled: "on",
      onHoverStop: "on",
      navOffsetHorizontal: 0,
      navOffsetVertical: 0,
      dottedOverlay: "none",
      fullScreen: "on",
    });
  }

  /* ================ FAQs ================ */
  $(".fa-caret-down").on("click", function (e) {
    e.preventDefault();
    $(this).next().slideToggle("");
  });

  /* ================ testimonials ================ */
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        700: {
          items: 1,
          nav: false,
        },
        1170: {
          items: 2,
          nav: true,
          loop: true,
        },
      },
    });
  });
})(jQuery);
