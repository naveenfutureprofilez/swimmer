$(document).ready(function () {
  var scroll_Price = 0;
  var startPrice = $("#herosec");

  if (startPrice.length) {
    $(document).scroll(function () {
      scroll_Price = $(this).scrollTop();
      if (scroll_Price < 100) {
        $(`section`).removeClass("sec-active");
      }
    });
  }

  var targets = document.querySelectorAll(".section_class");
  var obsOptions = {
    root: null, // measure against the viewport
    threshold: 0.5, // how much of the element should be visible before handler is triggered
  };
  let cr;
  let handler = (entries, opts) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > opts.thresholds[0]) {
        document.body.classList.remove(...document.body.classList);
        cr = entry.target.id;
        document.body.classList.add(entry.target.id + "-active");
        $(`section#${cr}`).focus().addClass("sec-active");
        $(`section#${cr}`).siblings("section").removeClass("sec-active");
      }

      console.log("intersectionRatio", entry.intersectionRatio);
    });
  };
  targets.forEach((el) => {
    var observer = new IntersectionObserver(handler, obsOptions);
    observer.observe(el);
  });
});

var owl = $(".row_main_card_slider");
owl.owlCarousel({
  centre: true,
  items: 2,
  loop: true,
  nav: true,
  // dots:false,
  // arrow:false,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    960: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
});
owl.on("mousewheel", ".owl-stage", function (e) {
  if (e.originalEvent.wheelDelta > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});
// Close New Js

var owlslider = $(".price_slider");
owlslider.owlCarousel({
  centre: true,
  items: 1,
  loop: false,
  autoplay: false,
  autoplayTimeout: 1000,
  autoplaySpeed: 80000,
  nav: true,
  // dots:false,
  // arrow:false,
  animateOut: "slideOutUp",
  animateIn: "slideInUp",
  margin: 0,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});
owlslider.on("mousewheel", ".owl-stage", function (e) {
  if (e.originalEvent.wheelDelta > 0) {
    owlslider.trigger("prev.owl");
  } else {
    owlslider.trigger("next.owl");
  }
  e.preventDefault();
});
