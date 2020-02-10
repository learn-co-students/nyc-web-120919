this.name = 'window object'
/************ Function Called with New Keyword ***********/
// inside a constructor fn, this will be the newly created object
 
class Person {
  constructor(name, favColor){
    this.name = name
    this.favColor = favColor
  }
}

// function Person(name, favColor){
//   this.name = name
//   this.favColor = favColor
// }

const andy = new Person('andy', 'teal')
/********************************************************/

/************ Bind Call Apply ****************************/
// within a function called with `apply/call/bind`, 
// 'this'will be the object passed as the first parameter

const billy = { name: "billy" }
const jane = { name: "jane" }
const louisa = { name: "louisa" }

function sayName(location, time) {
  console.log(`${this.name} says hello from ${location} at ${time}`)
}

// sayName.call(billy, 'Red Deer', '02/10/20')
// sayName.apply(jane, ['Red Deer', '02/10/20'])
// const boundLouisa = sayName.bind(louisa, 'Red Deer', '02/10/20')

/********************************************************/

/************ Function called on an Object ***************/
// within a `function` called within a particular object/context (i.e. `Object.method()`)
// 'this' will be the context/object

const dog = {
  name: 'Eli',
  sayThis: function(){
    console.log('My this is', this)
  }
}

// dog.sayThis() => My this is {name: "Eli", sayThis: ƒ}
// let dogMethod = dog.sayThis 
// dogMethod() => My this is window...
/********************************************************/

/************ Simple Function Call ***********************/
//  for a simple function call `fn()` will be the window object (browser) 
// or the global object (Node)

function sayThis(){
  return this
}

/********************************************************/

/************ Arrow Functions ****************************/
const thisArrow = {
  sayThis: () => console.log('arrow', this),
  sayOtherThis: function(){ console.log('function', this)}
}

const arrowFunction = () => console.log('hi', this)
/********************************************************/
