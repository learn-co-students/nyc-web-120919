const movieList = document.getElementsByTagName('ul')[0]
const movies = [
  {
    title: 'Jaws',
    imageUrl: 'https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA',
    year: 1975,
    score: 0
  },
  {
    title: 'The Matrix',
    imageUrl: 'https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0',
    year: 1999,
    score: 0
  },
  {
    title: 'The Goonies',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
    year: 1985,
    score: 0
  },
  { 
    title: 'Free Willy',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
    year: 1993,
    score: 0  
  },
  { 
    title: 'Top Gun',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
    year: 1986,
    score: 0  
  },
  { 
    title: 'Mean Girls',
    imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
    year: 2004,
    score: 0  
  }
]

movies.forEach(function (movie) {
  let li = createLi(movie)
  movieList.append(li)
})


function createLi(movie){
  let li = document.createElement('li')
  li.className = "movie"

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

    let li = event.target.parentNode
    let span = li.querySelector('span')
    span.innerText = parseInt(span.innerText) + 1
  } else if(event.target.dataset.purpose === 'delete') {
    let li = event.target.parentNode
    li.remove()
  } 
})

let formButton = document.createElement('button')
formButton.innerText = 'Add New Movie'
formButton.dataset.purpose = 'addMovie'

let br = document.querySelector('br')
document.body.insertBefore(formButton, br)

// let welcome = document.querySelector('img')
// welcome.insertAdjacentElement("afterend", formButton)

formButton.addEventListener('click', function(event){
  console.log('adding movie')

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

    let li = createLi(newMovie)
    movieList.append(li)

    newForm.reset()
    
    document.body.replaceChild(formButton, newForm)
  })
  
})