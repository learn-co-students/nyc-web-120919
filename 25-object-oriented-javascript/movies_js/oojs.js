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
    this.species = obj.species
  }

  speak(){
    console.log(`My name is ${this.name}`)
  }
}

const bill = new Animal({ name: "bill", species: "lion" })
const samantha = new Animal({ name: "samantha", species: "koala" })