$(document).ready(function(){

  $.getJSON("https://rocky-taiga-63970.herokuapp.com/timeline")
    .done(function(posts){
      // return response.json()
      // .then(function(posts){
        posts.forEach(function(post){
        tempHTML = `
          <div class="row">
            <div class="col-md-2 avatar">
              <div class="row">
                <img src = "${ post.user.photo_url }" />
              </div>
              <div class="row username">
                <p> ${ post.user.username } </p>
              </div>
            </div>
            <div class="col-md-10 post_body">
              <div class="row">
                <p> ${ post.body } </p>
              </div>
              <div class="row">
                <p> Posted at ${ post.created_at } </p>
              </div>
            </div>
          </div>
        `
        element = document.getElementById("content")
        element.innerHTML += tempHTML
      })
    })
  })
// })
