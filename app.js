
// API KEY  http://www.omdbapi.com/?i=tt3896198&apikey=6a63793f
// setTimeout(() => {
//   searchMovie()
// })

async function searchMovie(event) {
   event.preventDefault();
   document.getElementById("loading-screen").style.display = "flex";
   const id = event.target.value
   const post = await (fetch(`http://www.omdbapi.com/?s=${id}&page&apikey=6a63793f&`))
   const postData = await post.json()
   console.log(postData)
   
   const movieListEl = document.querySelector(".posts")
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
      )).join("")
      setTimeout(() => {
         document.getElementById("loading-screen").style.display = "none";
      }, 5000)
}





   

   