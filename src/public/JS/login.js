var form1 = document.getElementById('form-1')
form1.addEventListener('submit',function(event){

    event.preventDefault();
    
});





function ValidateForm1(){
    var username = document.getElementById("username")
    var userpassword= document.getElementById("user-password")

    username.onblur= ()=>{
          if(username.value == ""){

        showErr(username, "Username cannot be blank")
    
    }
      else{
        showSuc(username)
    }
}
username.oninput= ()=>{
    
    showSuc(username)
}
userpassword.onblur= ()=>{
if(userpassword.value == ''){
        showErr(userpassword , "Password cannot be blank")
        }
        else{
            showSuc(userpassword)
          }
}
userpassword.oninput= ()=>{
    
                showSuc(userpassword)
}


function showErr(value, message){
    value.parentElement.lastElementChild.innerText = message
    value.parentElement.classList.add('error')
}
function showSuc(value){
    value.parentElement.classList.remove('error')
    value.parentElement.lastElementChild.innerText = ''

}
var btnSub = document.getElementById('btn-submit1')

    form1.onsubmit = () => {
          if(!userpassword.value){
            userpassword.parentElement.lastElementChild.innerText = "Password cannot be blank"
            userpassword.parentElement.classList.add('error')
        }     
        if(!username.value){
            username.parentElement.lastElementChild.innerText = "Username cannot be blank"
            username.parentElement.classList.add('error')
            username.focus()
        }
 
            // username.parentElement.lastElementChild.innerText = "Username cannot be blank"
            // username.parentElement.classList.add('error')
            // username.focus()
            // userpassword.parentElement.lastElementChild.innerText = "Password cannot be blank"
            // userpassword.parentElement.classList.add('error')
        // switch() {
        //       case userpassword.value:
        //        { userpassword.parentElement.lastElementChild.innerText = "Password cannot be blank"
        //         userpassword.parentElement.classList.add('error')
            
        //     }
        //     case username.value:
        //        { username.parentElement.lastElementChild.innerText = "Username cannot be blank"
        //         username.parentElement.classList.add('error')
            
        //     }
          
        //     }
        //     switch(true) {
        //         case userpassword.value:
        //          { userpassword.parentElement.lastElementChild.innerText = ""
        //           userpassword.parentElement.classList.remove('error')
              
        //       }
        //       case username.value:
        //          { username.parentElement.lastElementChild.innerText = ""
        //           username.parentElement.classList.remove('error')
              
        //       }
            
              }

          }
    // username.parentElement.lastElementChild.innerText = "Username cannot be blank"
    // username.parentElement.classList.add('error')
    // username.focus()
    // userpassword.parentElement.lastElementChild.innerText = "Password cannot be blank"
    // userpassword.parentElement.classList.add('error')



// }

ValidateForm1()