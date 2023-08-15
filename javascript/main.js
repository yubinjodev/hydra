$(document).ready(function () {
  $("#hamburger").click(() => {
    $(".Menu-root").slideDown();
    $("header").hide();
    $("main").hide();
    $("footer").hide();
  });

  $(".Menu-root button").click(function () {
    $(".Menu-root").slideUp();
    $("header").show();
    $("main").show();
    $("footer").show();
  });

  $(".Header-root__links, .Footer-root__nav").on(
    "click",
    'a[href^="#"]',
    function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - 150,
        },
        800
      );
    }
  );

  $("#contact-btn, #join-btn, #touch-btn").click(function () {
    $("html").animate(
      {
        scrollTop: $("#contact").offset().top - 150,
      },
      800
    );
  });

  $(".slider-nav.left").click(function () {
    $(this).siblings(".slider-1, .slider-2, .slider-3, .slider-4").animate({
      scrollLeft: "-=300",
    });
  });

  $(".slider-nav.right").click(function () {
    $(this).siblings(".slider-1, .slider-2, .slider-3, .slider-4").animate({
      scrollLeft: "+=300",
    });
  });

  $("#menu-about, #menu-build, #menu-tech, #menu-how").click(function (event) {
    event.preventDefault();

    $(".Menu-root").slideUp();
    $("header").show();
    $("main").show();
    $("footer").show();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 900,
      },
      800
    );
  });
});
