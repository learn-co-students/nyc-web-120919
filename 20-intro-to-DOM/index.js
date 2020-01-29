console.log('movies are the best')

// √create a new li for gremlins
// √put some HTML inside the li - img, h3, etc.
// √get the ul
// √attach the li to the ul



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
