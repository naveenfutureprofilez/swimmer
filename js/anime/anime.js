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


const x = 0;

// $(document).scroll(function(){
//   console.log('hhhhhhhhhhhhhhh');
//   if ($("body").hasClass("statistics-active") && x == 0) {

  // $(".statBox").css('opacity', 1);
//     x++;
//   }
// })
 
    AnimateBox(p_1, ".statBox1  .el");
    anime({
      targets: ".statBox1 .el",
      translateX: 0,
      opacity: 1,
      translateY: 0,
      duration: 1500,
      easing: "easeOutExpo",
    });
    AnimateBox(p_2, ".statBox2 .el");   
    anime({
      targets: ".el-text2",
      bottom: "0px",
      opacity: "1",
      easing: "easeInOutQuad",
      duration: 1500,
    });
    AnimateBox(p_3, ".statBox3 .el");
    anime({
      targets: ".el-text1",
      left: "0px",
      opacity: "1",
      easing: "easeInOutQuad",
      duration: 1500,
    });
    AnimateBox(p_4, ".statBox4 .el");
    anime({
      targets: ".el-text3",
      right: "0px",
      opacity: "1",
      easing: "easeInOutQuad",
      duration: 1500,
    });
    
