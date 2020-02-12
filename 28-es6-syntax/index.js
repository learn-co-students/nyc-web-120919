console.log('loaded')

const array = [1,2,3,4]
const b = array
const c = array.slice()
const d = Object.assign([], array)

// Spread Operator ...

const e = [...array]
const f = [...array, 5, 6]
const g = [5,6, ...array]

const h = [...array, ...g]

// objects

const obj = { name: 'Billy Zane', age: 50 }
const obj2 = { ...obj }
const obj3 = { ...obj, age: 99, birthday: '02/24/66', height: "6'" }
const obj4 = { ...obj, age: 51 }
const obj4a = { age: 51, ...obj}
const obj5 = {...obj, ...obj3}


const marty = {name: 'Marty McFly', age: 16, car: {model: 'Delorean', doors: 2}}
const marty2 = {...marty} // shallow copy of marty

const marty3 = {...marty, car: {...marty.car}} // deep copy of marty.car object

// Destructuring

const bart = {name: "Bart Simpson", catchphrase: "Dont' have a cow, man!", car: {model: 'VW Golf', color: "purple"}}

// Old way
// const name = bart.name
// const catchphrase = bart.catchphrase
// const car = bart.car

const { name, catchphrase, car } = bart

function someFunction(name, catchphrase, car){
  console.log(`Hi! My name is ${name} and I drive a ${car.color} ${car.model}. ${catchphrase}`)
}

someFunction(name, catchphrase, car)

// Restructuring

const cow = 'beef'
const chicken = 'tasty'
const tofu = 'soy'

// Old way
const oldFoods = { cow: cow, chicken: chicken, tofu: tofu }

// New way
const newFoods = { cow, chicken, tofu }

const oldArray = ['apples', 'oranges', 'bananas']
const [x, y, z] = oldArray


