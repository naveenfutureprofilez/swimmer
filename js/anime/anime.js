function AnimateBox(e) {
    anime.set(e, {
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

    anime({
      targets: e,
      translateX: 0,
      translateY: 0,
      duration: 3000,
      opacity: 1,
      easing: "easeOutExpo",
    });
}
const p_1 = document.querySelectorAll(".statBox1 .el");
const p_2 = document.querySelectorAll(".statBox2 .el");
const p_3 = document.querySelectorAll(".statBox3 .el");
const p_4 = document.querySelectorAll(".statBox4 .el");


// Get the element you want to animate
// jQuery document ready
$(document).ready(function() {
  var myElement = document.getElementById('statistics');
  console.log("myElement", myElement); 
  var myElement = document.querySelector('.statistics');
  var observer = new IntersectionObserver(function(entries) {
    console.log("animation runs 0 takes"); 
    if (entries[0].isIntersecting) {
      TakesEff();
      console.log("animation runs 1 takes"); 
    }
  }, { threshold: 0.5 });
  observer.observe(myElement);
  observer.unobserve(myElement);
});



function TakesEff () { 

    // animation boxex effects on function hits 
    AnimateBox(p_1);
    AnimateBox(p_2);   
    AnimateBox(p_3);
    AnimateBox(p_4);
    
    // animation text effects on function hits
    anime({
      targets: ".el-text2",
      bottom: "0px",
      opacity: "1",
      easing: "easeInOutQuad",
      duration: 1500,
    });
    anime({
      targets: ".el-text1",
      left: "0px",
      opacity: "1",
      easing: "easeInOutQuad",
      duration: 1500,
    });
    anime({
      targets: ".el-text3",
      right: "0px",
      opacity: "1",
      easing: "easeInOutQuad",
      duration: 1500,
    });

} 

 

    
