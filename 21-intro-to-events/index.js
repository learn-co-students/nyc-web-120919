
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


function createLi(){
  let li = document.createElement('li')
  li.className = "movie"

  li.innerHTML = `
    <h3>Gremlins</h3>
    <img alt=""
        src="https://images-na.ssl-images-amazon.com/images/I/51W8yqu8KNL._AC_.jpg" />
    <h4>Year: </h4>
    <p>1984</p>
    <h4>Score: <span>0</span> </h4>
    <button>Up Vote</button>
    <button>Down Vote</button>
  `
  return li
}

let ul = document.getElementsByTagName('ul')[0]

ul.append(createLi())


