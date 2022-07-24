
 

  
openPop()
   
    function openPop(){
  
    var clickpopups = document.querySelectorAll('.clickpopup')
     var popUp = document.querySelector(".popup") 
   
     for(let i=0; i <= clickpopups.length; i++){
        clickpopups[i].onclick = function(){
            var urlImg = clickpopups[i].firstElementChild.src
             popUp.innerHTML = 
    `

    <svg xmlns="http://www.w3.org/2000/svg" class=" cursor-pointer z-20 closePopup h-10 w-10 absolute top-3 right-3 " viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
</svg>
<div class="dark absolute bg-black opacity-50 w-full h-screen z-0"></div>
<div class=" bg-white max-w-900 h-fit flex sm:flex-row flex-col shadow rounded-xl p-5 z-20 ">
  <div class="img-popup rounded-2xl truncate h-fit flex my-auto items-center m-3">
    <img src=${urlImg} alt="" class="" >
  </div>
   <div class="cmt-popup w-2/3 flex flex-col items-center pl-10 justify-between max-h-900 relative">
 <h3 class="z-20 truncate max-w-375 absolute top-0 left-10 fixed text-xl font-bold mb-3 border-b-2 border-b-gray-600 w-full text-center p-2">Comment</h3>    
 <div class="overflow-auto w-full mt-45">   
      
      <div class=" overflow-auto h-auto ">
        <div class="addcomment">
            <div class="flex flex-row bg-gray-50 gap-2 p-3 shadow max-w-375">
              <div class="w-10 h-10 rounded-full truncate bg-red-500 m-2">
                <img src="/img/avatar1.jpg" alt="">
               
              </div>
               <p class="inputVal text-black w-4/5 overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, perspiciatis corrupti. Quasi, quia laborum, possimus reiciendis molestias dicta eligendi asperiores quo hic pariatur commodi molestiae ut earum, natus neque ipsa.
               </p>
            </div>
           
            
       
        </div>
  </div>
</div>
  
<div class="flex flex-col w-full border-t-2 border-t-gray-600 justify-between">
<div class="mt-2 flex gap-5">
  <svg xmlns="http://www.w3.org/2000/svg" class="heart h-7 w-7 hover:text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 hover:text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 hover:text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 hover:text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
    <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
  </svg>
</div>
<div class=" w-full text-center pt-2 flex justify-between items-center">        
<input type="text" placeholder="Write your opinions..." class="typeVal w-full h-10 p-3 rounded-xl outline-none w-full mt-2 p-2 bg-gray-200">
<span class=" send-btn w-10 h-10 flex items-center justify-end pt-2 cursor-pointer">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
    <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
  </svg>
</span>
</div>

</div>

</div>
</div>
    `
    popUp.classList.add('popup-gallery')
        var closePopup = document.querySelector('.closePopup') 
        var dark = document.querySelector('.dark') 
    closePopup.onclick = function(){
        popUp.innerHTML =''
        popUp.classList.remove('popup-gallery')
    }
    dark.onclick = function(){
        popUp.innerHTML =''
        popUp.classList.remove('popup-gallery')
    }
   
    var sendBtn = document.querySelector('.send-btn')
    var addcomment = document.querySelector('.addcomment')
    sendBtn.onclick = function(){
        //  var inputVal = document.querySelector(".inputVal")
          var type = document.querySelector('.typeVal')
        if(type.value){
       
        addcomment.innerHTML += 
        `
        <div class="flex flex-row bg-gray-50 gap-2 p-3 max-w-375 ">
        <div class="w-10 h-10 rounded-full truncate bg-red-500 m-2">
          <img src="/img/avatar1.jpg" alt="">
         
        </div>
         <p class="inputVal text-black w-4/5 break-words p-2">
          ${type.value}
         </p>
      </div>
        `
        type.value = ''
     }
        
    }
    var type = document.querySelector('.typeVal')
    type.addEventListener('keydown', (event) => {
        if(type.value){
            if(event.key == 'Enter'){
                addcomment.innerHTML += 
            `
            <div class="flex flex-row bg-gray-50 gap-2 p-3 max-w-375 ">
                <div class="w-10 h-10 rounded-full truncate bg-red-500 m-2">
                    <img src="/img/avatar1.jpg" alt="">
                </div>
                <p class="inputVal text-black w-4/5 break-words p-2">
                    ${type.value}
                </p>
            </div>
            `
            type.value = ''
            }
        }
        
    })
    var heart = document.querySelector(".heart")
    heart.onclick = function(){
        heart.classList.toggle('text-red-500')
    }

    
    /*------------------------------------- */
} }}
