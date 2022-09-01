$(document).ready(function () {

  // Nice Scrool

  $("html").niceScroll();
    $('.carousel').carousel({
        interval: 5000
      });

      //Show Color Option Div Whien Click On The Gear

      $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
      });

      // Change Theme Color On Click

      var colorLi = $(".color-option ul li");


      colorLi
      .eq(0).css("backgroundColor","#E41B17").end()
      .eq(1).css("backgroundColor","#E426D5").end()
      .eq(2).css("backgroundColor","#009AFF").end()
      .eq(3).css("backgroundColor","#FFD500");


      colorLi.click(function () {
        $("link[href*='them']").attr("href", $(this).attr("data-value"));

      });


      // Caching The Scroll Top Element
      
      var scrollButton = $("#scroll-top");

      $(window).scroll(function () {

        if ( $(this).scrollTop() >= 700) {

          scrollButton.show();

        }
        else {
          scrollButton.hide();
        }
      });

      scrollButton.click(function () {
        $("html,body").animate( { scrollTop: 0}, 600);
        
      });
});


// Loading Screen

$(window).on('load', function() {

  $(".overlay .sk-chase").fadeOut(3000, function () {

    $(this).parent().fadeOut(3000);

  });


})