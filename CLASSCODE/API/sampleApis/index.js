//linking and then destructuring the objects coffee and ales
const { getCoffees, getCoffeesTitles } = require('./getCoffees')
const { getAles } = require('./getAles')
// calling function from coffees.js
// initialize variable userName and assigned the value Rue
let userName = "Rue"
// called the function getCoffees from getCoffee.js and passed the userName variable to it
// getCoffees(userName)
// called the function getCoffeesTitles from getCoffee.js
getCoffeesTitles()
// called the function getAles from beer.js
// getAles()