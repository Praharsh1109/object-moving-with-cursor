var rectangle = document.querySelector("#rect");

var square = document.querySelector("#squa");

rectangle.addEventListener("mousemove", function (data) {
  let movee = gsap.utils.mapRange(
    0,
    window.innerWidth,
    80,
    window.innerWidth - 80,
    data.clientX
  );
  gsap.to("#rect", {
    left: movee,
    ease: Power3
  });
});



square.addEventListener("mousemove", function(go) {
 
  let upp = gsap.utils.mapRange(0, window.innerHeight, 100, window.innerHeight - 100,go.clientY);
  gsap.to("#squa",{
    top:upp,
    ease: Power1
  })
});


