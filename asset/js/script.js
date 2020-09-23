import chart from "./lib/chart.js";
function main() {
  console.log("hello");
  $("[data-trigger]").on("click", function () {
    console.log("hello");
    var trigger_id = $(this).attr("data-trigger");
    $(trigger_id).toggleClass("show");
    $("body").toggleClass("offcanvas-active");
  });

  // close button
  $(".btn-close").click(function (e) {
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
  });

  chart();
}

export default main;
