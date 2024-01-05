var circle = document.querySelector("#circ");

var square = document.querySelector("#squa");


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
    ease: Power4
  });
});


circle.addEventListener("mousemove",function(details){
  console.log(details)
  var circleLocation = circle.getBoundingClientRect(); 
  var insideCircLeft = details.clientX- circleLocation.left
    if (insideCircLeft <circleLocation.width/2 )  {
     var redColor=  gsap.utils.mapRange(0,circleLocation.width/2,200,0,insideCircLeft)

      gsap.to(circle,{
          backgroundColor: `rgb(${redColor},0,0)`,
          ease:Power4
      })
    }else{
      var greenColor=  gsap.utils.mapRange(circleLocation.width/2,circleLocation.width,0,200,insideCircLeft)
      gsap.to(circle,{
          backgroundColor: `rgb(0,${greenColor},0)`,
          ease:Power4
      })
  }   
})


circle.addEventListener("mousemove",function(detailsup){
  console.log(detailsup)
  var circleLocation = circle.getBoundingClientRect(); 
  var insideCircUp = detailsup.clientY- circleLocation.top
    if (insideCircUp <circleLocation.height/2 )  {
     var blueColor=  gsap.utils.mapRange(0,circleLocation.height/2,200,0,insideCircUp)

      gsap.to(circle,{
          backgroundColor: `rgb(0,0,${blueColor})`,
          ease:Power4
      })
    }else{
      var greenColor=  gsap.utils.mapRange(circleLocation.height/2,circleLocation.height,0,200,insideCircUp)
      gsap.to(circle,{
          backgroundColor: `rgb(0,${greenColor},0)`,
          ease:Power4
      })
  }   
})

