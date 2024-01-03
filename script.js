var rectangle = document.querySelector('#rect')

rectangle.addEventListener('mousemove',function(go){

    let movee = gsap.utils.mapRange(0,window.innerWidth,90,window.innerWidth-90,go.clientX)
    gsap.to("#rect",{
        left: movee,
        // ease:Power3
    });
})

// rectangle.addEventListener('click',function(go){
//     var rectangleLocation = rectangle.getBoundingClientRect(); 
//     var insideRectLeft = go.clientX- rectangleLocation.left
//       if (go.clientX < 150)  {
//        var redColor=  gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insideRectLeft)
//         gsap.to(rectangle,{
//             backgroundColor: `rgb(${redColor},0,0)`,
//             ease:Power4
//         })
//       }else{
//         var greenColor=  gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insideRectLeft)
//         gsap.to(rectangle,{
//             backgroundColor: `rgb(0,${greenColor},0)`,
//             ease:Power4
//         })
// })

gsap.utils.mapRange();