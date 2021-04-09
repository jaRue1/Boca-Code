//link coffee.json to coffee.js
const coffees = require('./data/coffee.json')

//console.log("this is all of my coffee data " + coffees)

//exporting function so that i can reference it in index.js

// this function displays only the coffees that have some kinda of milk in their ingredients 
// exports...
exports.getCoffees = function (name) {
  console.log('---------------------COFFEE FUNCTION----------------------------------')
  coffees.forEach( (recipe) => {
    if (recipe.ingredients.includes("Milk")  || 
        recipe.ingredients.includes("Cream") ||
        recipe.ingredients.includes("Steamed Milk") ||
        recipe.ingredients.includes("1oz Steamed Milk")
        ){
      console.log()
      console.log( name ," will drink this "+ recipe.title , " Menu # ", recipe.id)
    }
  })
  console.log('-------------------------------------------------------')
}





