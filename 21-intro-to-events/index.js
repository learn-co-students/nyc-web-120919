let upVoteButtons = Array.from(document.getElementsByClassName('up-vote'))


upVoteButtons.forEach(function(button){
  button.addEventListener('click', incrementScore)
})

function incrementScore(event) {
  let li = event.target.parentNode
  let span = li.querySelector('span')
  let score = span.innerText
  let newScore = parseInt(score) + 1
  span.innerText = newScore
}


const movies = [
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
    <button class="delete">&times;</button>
  `
  return li
}

let ul = document.getElementsByTagName('ul')[0]

movies.forEach(function (movie) {
  let li = createLi(movie)
  ul.append(li)
})


let deleteButtons = Array.from(document.getElementsByClassName('delete'))

deleteButtons.forEach(function(button){
  button.addEventListener("click", function(event) {
    let li = event.target.parentNode
    li.remove()
  })
})


// 1. find the button
// 2. add click listener to button
// 3. on click, increment the text in the span of that li

// let jawsButton = document.getElementsByTagName('button')[0]

// jawsButton.addEventListener('click', function (event) {
//   let li = event.target.parentNode
//   let span = li.querySelector('span')
//   let score = span.innerText
//   let newScore = parseInt(score) + 1
//   span.innerText = newScore
// })


// let welcomeImage = document.querySelector('img')

// welcomeImage.addEventListener('click', function(event){
//   console.log("clicking", event.target)
//   let image = event.target
//   image.style.border = "thick dashed blue"
// })

// welcomeImage.addEventListener('pointerover', function(event){
//   console.log('mouse on')
//   event.target.src = "https://www.nationalgeographic.com/content/dam/news/2016/07/19/slothlove/01_slothlove_leaves.jpg"
// })

// welcomeImage.addEventListener('mouseleave', function (event) {
//   console.log('mouse off')
//   event.target.src = "https://media.giphy.com/media/UDjF1zMreMld6/giphy.gif"
// })