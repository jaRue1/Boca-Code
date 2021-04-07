const person = {
  firstName: "Rue",
  lastName: "Johnson",
  age: 24,
  address: {
    city: "North Lauderdale",
    state: "Florida",
    zipcode: "33433",
  },
  pets: ['😸','🐶','🐎'],
}
//add properties to an object 
person.family = ['Blue','Rue','Jones','Green']

// adding element to an array
person.pets.push('🐟')

// assigning object properties values to variables
// const myAge = person.age 
// const myCity = person.address.city
// const myZip = person.address.zip
// const myState = person.address.state
//console.log("My state is "+ myState)

// Destructuring Nested Object Address
const {zip , state, city} = person

// Destructuring Object Person
const {address, age, firstName,lastName, pets} = person

//template literal 
// console.log(`My city ${address.city}, my zipcode ${address.zipcode}, and my age is ${age}`)

// function that calculate the users birth year using age value
function getYear(myAge){
  const thisYear = 2021
  let birthYear = thisYear - myAge
  //console.log(birthYear)
  return birthYear
}


const myYear = getYear(age)
//console.log('my year hear after the function', myYear)
//console.log('These are all object keys '+ Object.keys(person))

const allKeys = Object.keys(person)
//console.log('this is an array of keys ' + allKeys)


//Three ways of writing the same how to display object value. 
// console.log(person.firstName)
// console.log(person['firstName'])
// console.log(person[allKeys[0]])

// assinging the values of the object person to varialble all person.
const allValues = Object.values(person);
//console.log('This is all the value ' + allValues)

// display pets array 
console.log(person.pets)

