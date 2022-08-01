
var currentPros = document.querySelectorAll(".currentPro")
var newVals = document.querySelectorAll(".newVal")
var proWrapper = document.querySelector(".proWrapper")
var editBtn = document.querySelector(".editBtn")
var saveBtn = document.querySelector(".saveBtn")

editBtn.onclick = ()=>{
changProfile()
}
function changProfile(){
    editBtn.classList.add("nonedisplay")
    saveBtn.classList.add("blockdisplay")
    currentPros.forEach(currentPro=>{currentPro.classList.add("blockdisplay")})
    newVals.forEach(newVal=>{newVal.classList.add("blockdisplay")})
}
saveBtn.onclick =()=>{
    editBtn.classList.remove("nonedisplay")
    saveBtn.classList.remove("blockdisplay")
    currentPros.forEach(currentPro=>{currentPro.classList.remove("blockdisplay")})
    newVals.forEach(newVal=>{newVal.classList.remove("blockdisplay")})
}


