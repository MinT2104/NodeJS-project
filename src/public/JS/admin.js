var userMan = document.querySelector(".userMan")
var postMan = document.querySelector(".postMan")
var userBox = document.querySelector(".userBox")
var postBox = document.querySelector(".postBox")



postMan.onclick = ()=>{
    postBox.classList.add("blockdisplay")
    userBox.classList.add("nonedisplay")
}
userMan.onclick = ()=>{
    postBox.classList.remove("blockdisplay")
    userBox.classList.remove("nonedisplay")
}