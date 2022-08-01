
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



     var userBtn = document.querySelector(".userBtn");
    var userNav = document.querySelector(".userNav");
    var userWrap = document.querySelector(".userWrap");
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
    var rotateBtn = document.querySelector(".rotateBtn");
    var in4 = document.querySelector(".in4");

    rotateBtn.onmouseover = ()=>{
    in4.classList.add("blockdisplay")
    }
    rotateBtn.onmouseout = ()=>{
      in4.classList.remove("blockdisplay")
      }
      in4.onmouseover = ()=>{
        in4.classList.add("blockdisplay")
        }
        in4.onmouseout = ()=>{
          in4.classList.remove("blockdisplay")
          }


    // setCookie()
//     function setCookie(cname, cvalue, exdays) {
//       const d = new Date();
//       d.setTime(d.getTime() + (exdays*24*60*60*1000));
//       let expires = "expires="+ d.toUTCString();
//       document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//     }
   
