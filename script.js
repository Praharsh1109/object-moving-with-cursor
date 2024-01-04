var circle = document.querySelector("#circ");

var square = document.querySelector("#squa");

const speed = 2;
circle.addEventListener("mousemove", function (data) {
  let movee = gsap.utils.mapRange(
    0,
    window.innerWidth,
    80,
    window.innerWidth - 80,
    data.clientX
  );
  let upp = gsap.utils.mapRange(
    0,
    window.innerHeight,
    100,
    window.innerHeight - 100,
    data.clientY
  );
  gsap.to("#circ", {
    left: movee,
    top: upp,
    ease: Power1,
  });
});

// square.addEventListener("mousemove", function(go) {

//   let upp = gsap.utils.mapRange(0, window.innerHeight, 100, window.innerHeight - 100,go.clientY);
//   gsap.to("#squa",{
//     top:upp,
//     ease: Power1
//   })
// });
