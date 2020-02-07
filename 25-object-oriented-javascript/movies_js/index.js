window.addEventListener('DOMContentLoaded', function(){
  const movieList = document.getElementsByTagName('ul')[0]
  const baseUrl = "http://localhost:3000/api/v1/movies"
  const adapter = new Adapter({ baseUrl })

  let getMovies = () => {
    adapter.get()
    .then(function(movies){
      movies.forEach(function(movieObj){
        const newMovie = new Movie(movieObj)
        newMovie.render(movieList)
      })
    })
  }

  movieList.addEventListener('click', function(event){
    if (event.target.className === 'up-vote') {
      console.log('voting up')
      let id = parseInt(event.target.parentNode.dataset.id)
      const movie = Movie.find(id)
      
      movie.increaseScore(event)

      updateScore(id, movie.score)

    } else if(event.target.dataset.purpose === 'delete') {
      let li = event.target.parentNode
      li.remove()
    } 
  })

  function updateScore(id, score){
    adapter.patch(id, { score })
  }

  let formButton = document.createElement('button')
  formButton.innerText = 'Add New Movie'
  formButton.dataset.purpose = 'addMovie'

  let br = document.querySelector('br')
  document.body.insertBefore(formButton, br)

  // let welcome = document.querySelector('img')
  // welcome.insertAdjacentElement("afterend", formButton)

  formButton.addEventListener('click', function(event){

    let newForm = document.createElement('form')
    newForm.innerHTML = `
      <label for="title">Title: </label>
      <input type="text" name="title"><br/>
      <label for="imageUrl">Image URL: </label>
      <input type="text" name="imageUrl"><br/>
      <label for="year">Year: </label>
      <input type="number" name="year"><br/>
      <label for="submit">Submit: </label>
      <input type="submit" value="submit">
    `

    document.body.replaceChild(newForm, formButton)

    newForm.addEventListener('submit', function(event){
      event.preventDefault()

      let title = event.target.title.value
      let year = event.target.year.value
      let imageUrl = event.target.imageUrl.value
      let score = 0

      let newMovie = { title, year, imageUrl, score }

      fetch(baseUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify(newMovie)
      })
      .then(response => response.json())
      .then(movieObj => {
        // PESSIMISTIC RENDERING <= rendering only after getting confirmation from 
        // the DB that the record was created

        const newMovie = new Movie(movieObj)
        newMovie.render(movieList)
      })

      newForm.reset()
      
      document.body.replaceChild(formButton, newForm)
    })
  })


  getMovies()
})

