window.addEventListener('DOMContentLoaded', function(){
  const movieList = document.getElementsByTagName('ul')[0]
  const baseUrl = "http://localhost:4000/movies"


  let getMovies = () => {
    fetch(baseUrl)
    .then(function(response){
      return response.json()
    })
    .then(function(movies){
      movies.forEach(function(movie){
        let li = createLi(movie)
        movieList.append(li)
      })
    })
  }

  // fetch("http://localhost:4000/movies/")
  // .then(response => response.json())
  // .then(movies => {
  //   movies.forEach(function(movie){
  //     let li = createLi(movie)
  //     movieList.append(li)
  //   })
  // })


  function createLi(movie){
    let li = document.createElement('li')
    li.className = "movie"
    li.dataset.id = movie.id

    li.innerHTML = `
      <h3>${movie.title}</h3>
      <img alt=""
          src="${movie.imageUrl}" />
      <h4>Year: </h4>
      <p>${movie.year}</p>
      <h4>Score: <span>${movie.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button data-purpose="delete" data-coolTeachers="steven and matt and ian">&times;</button>
    `
    return li
  }

  movieList.addEventListener('click', function(event){
    if (event.target.className === 'up-vote') {
      console.log('voting up')
      let id = event.target.parentNode.dataset.id
      let li = event.target.parentNode
      let span = li.querySelector('span')
      let newScore = parseInt(span.innerText) + 1

      // OPTIMISTIC RENDERING <= rendering the change without knowing if
      // the changes to the DB were successful
      span.innerText = newScore

      updateScore(id, newScore)

    } else if(event.target.dataset.purpose === 'delete') {
      let li = event.target.parentNode
      li.remove()
    } 
  })


  function updateScore(id, score){
    // { score: score } equiv. to { score }

    fetch(`${baseUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({ score })
    })
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
      .then(movie => {
        // PESSIMISTIC RENDERING <= rendering only after getting confirmation from 
        // the DB that the record was created
        let li = createLi(movie)
        movieList.append(li)
      })

      newForm.reset()
      
      document.body.replaceChild(formButton, newForm)
    })
  })


  getMovies()
})