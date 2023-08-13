$(document).ready(() => {
  $("#hamburger").click(() => {
    $(".Menu-root").slideDown();
    $("header").hide();
    $("main").hide();
    $("footer").hide();
  });

  $(".Menu-root button").click(() => {
    $(".Menu-root").slideUp();
    $("header").show();
    $("main").show();
    $("footer").show();
  });
});
