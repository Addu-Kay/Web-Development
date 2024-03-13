// $("h1").addClass("big-title margin-50");

// $("button").text("Don't click me");
// $("h1").html("<em>Niggas in Paris</em>");

// console.log($("img").attr("src"));

// $("a").attr("href", "https://www.yahoo.com");

// $("button").click(function () {
//     $("h1").css("color", "aquamarine");
// });

// $("input").keyup(function (event) {
//     console.log(event.key);
// })

// $(document).keypress(function (event) {
//     $("h1").text(event.key);
// })

$("button").on("click", function () {
    // $("h1").toggle();
    // $("h1").show();
    // $("h1").hide();
    // $("h1").fadeToggle();
    // $("h1").fadeIn();
    // $("h1").fadeOut();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();

    $("h1").fadeOut().fadeIn().slideUp().slideDown().animate({ opacity: 0.4 }, 1000);

})
