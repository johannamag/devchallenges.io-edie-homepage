$(document).ready(function () {
  $("#mobile-nav").on("click", () => {
    $("#mobile-nav").toggleClass("is-active");
    $("#mobile-items").toggleClass("active");
  });
});
