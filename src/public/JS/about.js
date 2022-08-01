var userBtn = document.querySelector(".userBtn");
var userNav = document.querySelector(".userNav");



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
