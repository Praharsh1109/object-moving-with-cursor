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
  console.log(go.clientY);
  let upp = gsap.utils.mapRange(0, Window.innerHeight, 35, window.innerHeight - 20,go.clientY);
  gsap.to("#squa",{
    top:upp,
    ease : Power3
  })
});
