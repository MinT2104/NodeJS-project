

ScrollReveal(
  { 
    reset: true ,
    distance: '60px',
    duration: 2500,
    delay:400
});
ScrollReveal().reveal('.Left', {delay: 300, origin: 'left'});
ScrollReveal().reveal('.Right', {delay: 300, origin: 'right'});
ScrollReveal().reveal('.Bottom', {delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.Top', {delay: 300, origin: 'top'});

//-------------------------------------------------------------------------


     var userBtn = document.querySelector(".userBtn");
    var userNav = document.querySelector(".userNav");
    var navPopup = document.querySelector(".navPopup");
    var navMobie = document.querySelector(".navMobie");

    navPopup.onclick  = ()=>{
      navMobie.classList.toggle("nonedisplay")
     }

  
     userBtn.addEventListener("mouseover",function(){
      userNav.classList.add("blockdisplay")
    })
    userBtn.addEventListener("mouseout",function(){
      userNav.classList.remove("blockdisplay")
    })
    userNav.addEventListener("mouseover",function(){
      userNav.classList.add("blockdisplay")
    })
    userNav.addEventListener("mouseout",function(){
      userNav.classList.remove("blockdisplay")
    })
