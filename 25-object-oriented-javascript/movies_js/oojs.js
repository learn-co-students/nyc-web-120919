// animal = {
//   name: "bill",
//   species: "lion",
//   speak: function(){
//     console.log(`My name is ${this.name}!`)
//   }
// }

// animal2 = {
//   name: "samantha",
//   species: "koala",
//   speak: function(){
//     console.log(`My name is ${this.nam}!`)
//   }
// }

class Animal {
  constructor(obj){
    this.name = obj.name
    this.color = obj.color
  }

  speak(){
    console.log(`My name is ${this.name}`)
  }
}

class Lion extends Animal{
  species = 'lion'
  
  constructor(obj){
    super(obj)
    this.noOfLive = obj.noOfLives
  }

  speak(){
    console.log("roar")
  }

  hakunaMatata(){
    console.log("what a wonderful phrase")
  }
}

class Koala extends Animal{
  species = 'koala'

  speak(){
    console.log("mew")
  }
}

// const bill = new Animal({ name: "bill", species: "lion" })
// const samantha = new Animal({ name: "samantha", species: "koala" })

const leo = new Lion({ name: "Leo", color: 'orangey-brown-stripe', noOfLives: 6 })
const kiki = new Koala({name: "Kiki", color: 'formidable-gray'})