var h5timer=document.querySelector(".line1_part h5");
var grow=0;
setInterval(function(){
  if(grow<100){
    h5timer.innerHTML=grow++;
  }else{
    h5timer.innerHTML=grow;
  }
},35)
var t1=gsap.timeline()
// --------------------------------
t1.from(".line h1",{
    y:200,
    stagger:0.3,
    duration:0.5,
    delay:0.3,
})
// --------------------------------
t1.from(".line1_part,.line h2",{
    opacity:0,
//     onstart: function(){
//         var h5timer = document.querySelector(".line1_part h5");
//         var grow=0;
//           setInterval(function(){
//           if(grow<100){
//             h5timer.innerHTML=grow++;
//           }else{
//             h5timer.innerHTML=grow;
//           }
//         },38)
//     }
})
// ---------------------------------
t1.to(".line h2",{
  AnimationName:"anime",
  opacity:1,
})
t1.to(".loader",{
    opacity:0,
    duration:0.3,
    delay:2.4,
})
t1.from(".page1",{
  delay:0.3,
  y:1600,

})
t1.to(".loader",{
  display:"none",
})