//linking and then destructuring the objects coffee and ales
const { getCoffees } = require('./coffee.js')
const { getAles } = require('./beer.js')
// calling function from coffees.js
// initialize variable userName and assigned the value Rue
let userName = "Rue"
// called the function getCoffees from coffee.js and passed the userName variable to it
getCoffees(userName)
// called the function getAles from beer.js
getAles()