
// API KEY  http://www.omdbapi.com/?i=tt3896198&apikey=6a63793f
// setTimeout(() => {
//   searchMovie()
// })


const loaderDiv = document.querySelector('.loader');

function showloader() {
   loaderDiv.classList.add('show');
}

function hideloader() {
   loaderDiv.classList.remove('show');
}



async function searchMovie(event) {
   showloader();
   const id = event.target.value;
   const post = await (fetch(`http://www.omdbapi.com/?s=${id}&page&apikey=6a63793f&`));
   
   const postData = await post.json();
   // console.log(postData)
   const movieListEl = document.querySelector(".posts");
   hideloader()
   movieListEl.innerHTML = postData.Search
      .map((
         (data) => 
            `<div class="posts">
            <div class="movie__poster">
               <img src="${data.Poster}">
            </div>
            <div class= "info__wrapper">
               <div class="movie__title">
                  <h2>${data.Title}</h2>
               </div>
               <div class="movie__rating">
                  <h6>${data.Year}</h6>
                  <h6>${data.Type}</h6>
               </div>
            </div>   
         </div>`
      )).join("");
      
}











   

   