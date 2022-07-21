document.addEventListener('DOMContentLoaded', () => {
    innerRes()
    getImg(1);
    });
function innerRes(){
    let imgs = document.querySelector(".imgs")
    let imgss = document.querySelector(".imgss")

  

    // async function fetchImages(baseURL){
    // const API_KEY = '563492ad6f917000010000015a6703d8ce184eb5b934d24398448a02'
    // const baseURL = 'https://api.pexels.com/v1/'
    //   const response = await fetch(baseURL, {
    //     method: 'GET',
    //     headers: {
    //       Accept: 'application/json',
    //       Authorization: API_KEY
    //     }
    //   });
    //   const data = await response.json();
    //   // console.log(data);
    //   return data;
    // }

    // async function getImg(index){
    //   this.loadMore.setAttribute('data-img', 'curated');
    //   const baseURL = `https://api.pexels.com/v1/curated?page=${index}&per_page=12`;
    //   const data = await this.fetchImages(baseURL);
    //   this.GenerateHTML(data.photos)
    //   console.log(data)
    // }
    async function fetchImages(baseURL){
      const API_KEY = '563492ad6f917000010000015a6703d8ce184eb5b934d24398448a02'
      const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: API_KEY
        }
      });
      const data = await response.json();
      // console.log(data);
      return data;
    }

    // var urlbase = '/API-source/api-source.json'


  //   fetch(urlbase)
  // .then(response => response.json())
  // .then(data =>{
  //   console.log(data)
    // for (let i = 0; i<= data.photos.length ; i++){
    //     console.log(data.photos[i].src.medium)
    //         imgs.innerHTML += `   
    //                     <div class=" imgs rounded-3xl truncate mb-7 shadow m-2">
    //                     <img src=${data.photos[i].src.medium} alt="" class="img-style hover:transform15 ">
    //                   </div>
    //                           `
    //          imgss.appendChild(imgs)
    // }
        // data.photos.map(function(photo){
        //   console.log(photo.src.medium)
        //     var image =   `   
        //                 <div class="rounded-3xl truncate mb-7 shadow m-2">
        //                 <img src=${photo.src.medium} alt="" class="img-style hover:transform15 ">
        //               </div>
        //                `
        //     imgs.innerHTML += image
        //     imgs.appendChild(image)
        // console.log(data.photos)
           

        // })
// }




/*-----------------------------------------------login page---------------------------------------------------- */

/*-----------------------------------------------------------signup------------------------------------- */

    



  

/*--------------------------------------------gallery-homepage----------------------------------------- */


