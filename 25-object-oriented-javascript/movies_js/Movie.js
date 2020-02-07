class Movie {
  static all = []
  
  constructor(obj){
    this.id = obj.id
    this.title = obj.title
    this.year = obj.year
    this.imageUrl = obj.imageUrl
    this.score = obj.score
    Movie.all.push(this)
  }

  render(ele){
    let li = document.createElement('li')
    li.className = "movie"
    li.dataset.id = this.id

    li.innerHTML = `
      <h3>${this.title}</h3>
      <img alt=""
          src="${this.imageUrl}" />
      <h4>Year: </h4>
      <p>${this.year}</p>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button data-purpose="delete" data-coolTeachers="steven and matt and ian">&times;</button>
    `
    ele.append(li)
  }

  increaseScore(event){
    let li = event.target.parentNode
    let span = li.querySelector('span')
    let newScore = parseInt(span.innerText) + 1

    span.innerText = newScore
    this.score = newScore
  }

  static find(id){
    return this.all.find(movie => movie.id === id)
  }
}

// Movie.all = []