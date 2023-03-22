$(document).ready(function () {
  let sun = document.getElementById("sunimg");
  let badalimg = document.getElementById("badalimg");
  let left_top_tree = document.getElementById("left_top_tree");
  // let hero_sec_title_box = document.getElementById("hero_sec_title_box");
  // let lefttexthero = document.getElementById("lefttexthero");
  let left_bottom_tree_box = document.getElementById("left_bottom_tree_box");
  let bottom_sky_color_img = document.getElementById("bottom_sky_color_img");
  let right_tree_gamla_box = document.getElementById("right_tree_gamla_box");
  let top_sky_color = document.getElementById("top_sky_color");
  let duckimame = document.getElementById("duckimame");

  window.addEventListener("scroll", function () {
    var value = window.scrollY;
    sun.style.left = value * 0.5 + "px";
    badalimg.style.left = value * 0.5 + "px";
    left_top_tree.style.left = -value * 0.5 + "px";
    left_top_tree.style.top = -value * 0.5 + "px";
    // hero_sec_title_box.style.top = value * 0.5 + "px";
    // lefttexthero.style.top = value * 0.5 + "px";
    left_bottom_tree_box.style.top = value * 0.5 + "px";
    bottom_sky_color_img.style.bottom = -value * 0.5 + "px";
    duckimame.style.right = value * 0.5 + "px";
    top_sky_color.style.top = -value * 0.5 + "px";
  });
});
$(document).ready(function () {
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
        $(`section#${cr}`).focus().addClass('sec-active');
        console.log('cr-id', cr);
        $(`section#${cr}`).siblings('section').removeClass('sec-active');
      }
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
