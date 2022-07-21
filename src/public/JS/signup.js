var form2 = document.getElementById('form-2')
form2.addEventListener('submit',function(event){

    // event.preventDefault();
    
});

function ValidateForm2(){
    var username = document.getElementById("username")
    var userpassword= document.getElementById("user-password")
    var confirmpassword = document.getElementById("confirm-password")
    var useremail = document.getElementById("email")
    username.onblur= ()=>{
      if(!username.value){
        showErr(username, "Username cannot be blank")
    }
      else{
        showSuc(username)
    }}

username.oninput= ()=>{
    
    showSuc(username)
}
userpassword.onblur= ()=>{if(!userpassword.value)
                    { showErr(userpassword , "Password cannot be blank") }
                         else{ showSuc(userpassword)}}
userpassword.oninput= ()=>{showSuc(userpassword)}


function showErr(value, message){
    value.parentElement.lastElementChild.innerText = message
    value.parentElement.classList.add('error')
}
function showSuc(value){
    value.parentElement.classList.remove('error')
    value.parentElement.lastElementChild.innerText = ''

}

    form2.onsubmit=(event)=> {

   
     if(!userpassword.value){
            userpassword.parentElement.lastElementChild.innerText = "Password cannot be blank"
            userpassword.parentElement.classList.add('error')
            event.preventDefault()
            }     

             
    if(!useremail.value){
        useremail.parentElement.lastElementChild.innerText = "Email is not valid"
        useremail.parentElement.classList.add('error')
            event.preventDefault()
  
    } 

       if(!username.value){
            username.parentElement.lastElementChild.innerText = "Username cannot be blank"
            username.parentElement.classList.add('error') 
            event.preventDefault()
        } 
           if(!confirmpassword.value){
            confirmpassword.parentElement.lastElementChild.innerText = "ConfirmPassword cannot be blank"
            confirmpassword.parentElement.classList.add('error')
            event.preventDefault()
        }
}
/*--------------------------------------------------validate Email------------------ */
var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    useremail.onblur = ()=>{
    if(useremail.value.match(emailRegex)){
       showSuc(useremail)      
            }
            else{
               showErr(useremail , "Email is not valid")
              }

}             
/*---------------------------------------------------confirmpass------------------------- */

    confirmpassword.oninput= ()=>{
    
        showSuc(confirmpassword)
        if(userpassword.value != confirmpassword.value){
        
            showErr(confirmpassword, "your password does not match")
                }
                else{
                    showSuc(confirmpassword)
                }
    }
  confirmpassword.onblur = ()=>{
            if(confirmpassword.value == ''){
                showErr(confirmpassword , "ConfirmPassword cannot be blank")
            }
                    else{
                    showSuc(confirmpassword)  
                    }
    }
    confirmpassword.onblur = ()=>{
        if(confirmpassword.value !== userpassword.value){
            showErr(confirmpassword , "Password does not match")
        }
                else{
                showSuc(confirmpassword)  
                }
}

   

}
    

ValidateForm2()
