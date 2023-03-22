  var ani1 = anime({
    targets: ".el-text2",
    bottom: "0px",
    opacity: "1",
    easing: "easeInOutQuad",
    duration: 1500,
  });

  var ani2 = anime({
    targets: ".el-text1",
    left: "0px",
    opacity: "1",
    easing: "easeInOutQuad",
    duration: 1500,
  });

  var ani3 = anime({
    targets: ".el-text3",
    right: "0px",
    opacity: "1",
    easing: "easeInOutQuad",
    duration: 1500,
  });

  const p_1 = document.querySelectorAll(".statBox1 .el");
  const p_2 = document.querySelectorAll(".statBox2 .el");
  const p_3 = document.querySelectorAll(".statBox3 .el");
  const p_4 = document.querySelectorAll(".statBox4 .el");


$(document).ready(function () {
  var targets = document.querySelectorAll("#statistics");
  var obsOptions = {
    root: null, // measure against the viewport
    threshold: 0.5, // how much of the element should be visible before handler is triggered
  };
  let cr;
  let handler = (entries, opts) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > opts.thresholds[0]) {
        
        const AniSet = (e) => anime.set(e, {
          opacity: 0,
          translateY: anime.stagger([
            Math.floor(100 + Math.random() * -999),
            Math.floor(100 + Math.random() * 999),
          ]),
      
          translateX: anime.stagger([
            Math.floor(100 + Math.random() * -999),
            Math.floor(100 + Math.random() * 999),
          ]), 
        });

        AniSet(p_1);
        AniSet(p_2);
        AniSet(p_3);
        AniSet(p_4);

        ani1.play();
        ani2.play();
        ani3.play();
        
        const aniLast = (e) => anime({
          targets: e,
          opacity: 0.5,
          translateX: 0,
          translateY: 0,
          duration: 3000,
          opacity: 1,
          easing: "easeOutExpo",
        });

        aniLast(p_1).play(); 
        aniLast(p_2).play();    
        aniLast(p_3).play(); 
        aniLast(p_4).play(); 

      }
    });
  };
  targets.forEach((el) => {
    var observer = new IntersectionObserver(handler, obsOptions);
    observer.observe(el);
  });
});

    
