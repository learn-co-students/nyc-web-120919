// // console.log("howdy")


// hoisting

// dog = 'Hannah'

// console.log(dog, '1')

// const dog

// bark()

// var bark = function (){
//   console.log('woof')
// }

// function sayName(name, lastName) {
//   console.log(`my name is ${name} ${lastName}(in js)`)
// }

// let obj = {
//   identity: 'Beyonce',
//   method: function(){
//     console.log('other function')
//   },
//   otherMethod: sayName
// }

// let someVariable = 'stuff'

// function someFunction(){
//   let someVariable = 'stuff'

//   console.log(someVariable)
// }

// console.log(someVariable)
// someFunction()

// if (true) {
//   const someVariable = "stuff"
//   console.log(someVariable)
// }

// console.log(someVariable)

function multiplier(x) {
  return function(y){
    return x * y
  }
}