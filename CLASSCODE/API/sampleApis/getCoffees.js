//link coffee.json to coffee.js
//const allCoffees = require('./data/allCoffees.json')
//console.log("this is all of my coffee data " + coffees)
const fetch = require('node-fetch')
let allCoffees =[]
fetch('https://api.sampleapis.com/coffee/hot')
.then(response => response.json())
.then( data => {
  allCoffees = data
  console.log(data)

})
.catch(err => console.log('Error Fetching API ', err))
//exporting function so that i can reference it in index.js
// this function displays only the coffees that have some kinda of milk in their ingredients 
// exports...
exports.getCoffees = function (name) {
  console.log('---------------------COFFEE FUNCTION----------------------------------')
  allCoffees.forEach( (recipe) => {
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
// name this function  and export
exports.getCoffeesTitles = function(){
  // filter all coffees which is an array of objects
 const coffeeTitles =  allCoffees.filter(function(item){
    // return each coffee titles  
    return item.id >=15 
  })
 console.log(" Coffee Name : " , coffeeTitles)
}




