$(document).ready(function () {
  // Home Page Load Animation Start

  // $(".hTreeleft").animate(
  //   {
  //     width: "194px",
  //   },
  //   2000,
  //   function () {}
  // );
  // $(".hTreeleft img").animate(
  //   {
  //     height: "207px",
  //   },
  //   2000,
  //   function () {}
  // );
  // $(".hSun").animate(
  //   {
  //     width: "92px",
  //     height: "92px",
  //   },
  //   2000,
  //   function () {}
  // );
  // $(".hCloud").animate(
  //   {
  //     left: "500px",
  //   },
  //   2000,
  //   function () {}
  // );
  // $(".hTitleImg").animate(
  //   {
  //     width: "538px",
  //     height: "76.06px",
  //   },
  //   2000,
  //   function () {}
  // );

  // $(".hDescOne p").animate(
  //   {
  //     left: "520px",
  //   },
  //   2000,
  //   function () {}
  // );
  // $(".hDescTwo p").animate(
  //   {
  //     right: "547px",
  //   },
  //   2000,
  //   function () {}
  // );
  // $(".hDuck").animate(
  //   {
  //     right: "80%",
  //   },
  //   2000,
  //   function () {}
  // );
  // $(".hButton").animate(
  //   {
  //     opacity: "1",
  //   },
  //   2000,
  //   function () {}
  // );

  // $(".htreeRight-Section .htreeRight img").removeAttr("style");
  $(".htreeRight img").removeClass("treeDown");
  $(".htreeRight img").css({ right: "7px", top: "-329px" });
  $(".htreeRight img").toggleClass("treeUp");
  // Home Page Load Animation Close

  // Our Price Js Start
  // $(".priceDtext").hide();
  // $("#s1").show();
  // $("#s1").css("top", "222px");
  // var i = 1;
  // $("#ourPrice").click(function () {
  //   if (i == 1) {
  //     // $("#s1").hide();
  //     $("#s1").animate({
  //       top: "-345px",
  //     });
  //     $("#s2").show();
  //     $("#s2").animate({
  //       top: "222px",
  //     });
  //   } else if (i == 2) {
  //     // $("#s2").hide();
  //     $("#s2").animate({
  //       top: "-345px",
  //     });
  //     $("#s3").show();
  //     $("#s3").animate({
  //       top: "222px",
  //     });
  //   } else if (i == 3) {
  //     // $("#s3").hide();
  //     $("#s3").animate({
  //       top: "-345px",
  //     });
  //     $("#s4").show();
  //     $("#s4").animate({
  //       top: "296px",
  //     });
  //   } else if (i == 4) {
  //     $("#s4").animate({
  //       top: "-345px",
  //     });
  //     $("#s5").show();
  //     $("#s5").animate({
  //       top: "296px",
  //     });
  //   }

  //   i++;
  // });
  // Our Price Js Close
  // OurPrice Scroll Animation Start
  var scroll_Price = 0;
  var startPrice = $("#ourPrice");
  var offsetPrice = startPrice.offset();

  if (startPrice.length) {
    $(document).scroll(function () {
      scroll_Price = $(this).scrollTop();
      if (scroll_Price > offsetPrice.top) {
        $("#title").css({ color: "#FCDB64", textShadow: "none" });
      } else {
        // $('.navbar-default').css('background-color', 'transparent');
      }
    });
  }
  // OurPrice Scroll Animation Close

  // Footer Scroll Animation Start
  // var scroll_start = 0;
  // var startchange = $("#footer");
  // var offset = startchange.offset();
  // if (startchange.length) {
  //   // console.log(startchange.length);
  //   $(document).scroll(function () {
  //     scroll_start = $(this).scrollTop();
  //     // console.table('cords',{
  //     //   start: scroll_start,
  //     //   end: offset.top
  //     // });
  //     if (scroll_start >= offset.top) {
  //       // console.log('sjkhjhsdg');
  //       $(".ftreeOne").animate(
  //         {
  //           width: "317px",
  //         },
  //         2000,
  //         function () {}
  //       );
  //       $(".ftreeThree").animate(
  //         {
  //           right: "-23.02%",
  //           top: "-10.82%",
  //           width: "332px",
  //         },
  //         2000,
  //         function () {}
  //       );
  //       $(".ftreeTwo").animate({
  //         left: "0",
  //         width: "743px",
  //       });
  //       $(".frighttubetwo").animate(
  //         {
  //           right: "-34.53%",
  //         },
  //         2000,
  //         function () {}
  //       );
  //       $(".flefttubeone").animate({
  //         right: "431px",
  //         top: "102px",
  //       });
  //       $(".fball").animate(
  //         {
  //           right: "300px",
  //           top: "38px",
  //         },
  //         2000,
  //         function () {}
  //       );
  //       $(".fmiddletubetwo").animate(
  //         {
  //           left: "7.09%",
  //           top: "60.73%",
  //         },
  //         2000,
  //         function () {}
  //       );
  //       $(".fBottemtree").animate(
  //         {
  //           width: "550px",
  //           bottom: "-186px",
  //         },
  //         2000,
  //         function () {}
  //       );
  //       $(".footerBtn").animate(
  //         {
  //           opacity: "1",
  //         },
  //         2000,
  //         function () {}
  //       );
  //       $(".footerBtn button").animate(
  //         {
  //           opacity: "1",
  //           padding: "7px 20px",
  //         },
  //         2000,
  //         function () {}
  //       );
  //     } else {
  //       // $('.navbar-default').css('background-color', 'transparent');
  //     }
  //   });
  // }

  // Footer Scroll Animation Close
  // Flow 2 Scroll Animation Start
  // var scroll_flowtwo = 0;
  // var startflow = $("#aboutus");
  // var offsetsflow = startflow.offset();
  // if (startflow.length) {
  //   $(document).scroll(function () {
  //     scroll_flowtwo = $(this).scrollTop();
  //     if (scroll_flowtwo > offsetsflow.top) {
  //       $(".left-div").addClass("leftMove");
  //       $(".right-div").addClass("rightMove");
  //     } else {
  //       // $('.navbar-default').css('background-color', 'transparent');
  //     }
  //   });
  // }
  //    Flow 2 Scroll Animation Close
  //  Why Use Setion Scroll Animation Start
  var scroll_whyuse = 0;
  var startwhyuse = $("#why_us_section");
  var offsetswhyuse = startwhyuse.offset();
  if (startwhyuse.length) {
    $(document).scroll(function () {
      scroll_whyuse = $(this).scrollTop();
      if (scroll_whyuse > offsetswhyuse.top) {
        setTimeout(function () {
          $("#whyusetitle").css({ color: "#FCDB64", textShadow: "none" });
        }, 2000);
        $(".why_us_text").addClass("why_us_textMove");
        $(".row_main_card_slider").addClass("row_main_card_sliderMove");
        // $(".right-div").addClass('rightMove');
      } else {
        // $('.navbar-default').css('background-color', 'transparent');
      }
    });
  }
  //  Why Use Setion Scroll Animation Close
  // Our Expertise Scroll Animation Start
  var scroll_Expertise = 0;
  var startExpertise = $("#ourExpertise");
  var offsetsExpertise = startExpertise.offset();
  if (startExpertise.length) {
    $(document).scroll(function () {
      scroll_Expertise = $(this).scrollTop();
      if (scroll_Expertise > offsetsExpertise.top) {
        $("#ourExpertisetitle").css({ color: "#FCDB64", textShadow: "none" });
      } else {
        // $('.navbar-default').css('background-color', 'transparent');
      }
    });
  }
  // Our Expertise Scroll Animation End
});
