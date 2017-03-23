$(document).ready(function(){

  $.getJSON("https://rocky-taiga-63970.herokuapp.com/timeline")
    .done(function(posts){
      // posts.forEach(function(post){
        source = $("#post-template").html()
        template = Handlebars.compile(source)
        context = { post: posts }
        compiledHTML = template(context)
        $("#content").append(compiledHTML)

    })

})

Handlebars.registerHelper('dateFormatter', function(time) {
  return moment(time).format('MMMM Do, YYYY @ h:mm:ss a')
})

        // tempHTML = `
        //   <div class="row">
        //     <div class="col-md-2 avatar">
        //       <div class="row">
        //         <img src = "${ post.user.photo_url }" />
        //       </div>
        //       <div class="row username">
        //         <p> ${ post.user.username } </p>
        //       </div>
        //     </div>
        //     <div class="col-md-10 post_body">
        //       <div class="row">
        //         <p> ${ post.body } </p>
        //       </div>
        //       <div class="row">
        //         <p> Posted on ${ moment(post.created_at).format('MMMM Do, YYYY @ h:mm:ss a') } </p>
        //       </div>
        //     </div>
        //   </div>
        // `
        // element = document.getElementById("content")
        // element.innerHTML += tempHTML
  //     })
  //   })
  // })
// })
