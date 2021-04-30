// Imagine you have 2 arrays, shopping list and cart.
// Write a function that REMOVES items from shopping list that are IN THE CART
let shoppingList = ['Milk','Chicken','Pineapple','Water','Bread','Eggs','Butter','Shampoo']
let myCart = ['Milk','Chicken','Pineapple','Water','Bread']
//Version 1 -------------------------------------------------------
function addTo(shoppingList,myCart) {
 let leftOver = shoppingList.filter((shoppingList) => {
    return !myCart.includes(shoppingList)
  })
  return leftOver
}
let result = addTo(shoppingList,myCart)
console.log(result)
//-------------------------------------------------------------------
// Version 2 --------------------------------------------------------
const addToCart = shoppingList.filter((data) => {return !myCart.includes(data)})
console.log(addToCart)
//-------------------------------------------------------------------