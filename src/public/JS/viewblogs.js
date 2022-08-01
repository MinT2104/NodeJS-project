// let ejs = require('ejs')
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
  // document.querySelector(".mainContent").innerHTML = `<%=data.content%>`
  // alert("ok")
     