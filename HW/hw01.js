// Imagine you have 2 arrays, shopping list and cart.
// Write a function that REMOVES items from shopping list that are IN THE CART
let shoppingList = ['Milk','Chicken','Pineapple','Water','Bread','Eggs','Butter','Shampoo']
let myCart = ['Milk','Chicken','Pineapple','Water','Bread']
// Version 1 ----------------------------------------------
function addTo(shop,cart) {
  shop.filter((shop) => {
    return !cart.includes(shop)
  })
}
console.log(addTo(shoppingList,myCart))
//---------------------------------------------------------
// Version 2 ----------------------------------------------
const addToCart = shoppingList.filter((data) => {return !cart.includes(data)})
console.log(addToCart)
//---------------------------------------------------------