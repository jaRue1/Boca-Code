const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// create a new array that has ages that are 21 older
const legalDrinkingAge = 21
let canDrink = []
// used a for loop -----------------------------------------------------
for (let i = 0; i <= ages.length; i++) {
  if (ages[i] >= legalDrinkingAge) {
    canDrink.push(ages[i])
  }
}
// for loop output -----------------------------------------------------
console.log("-------------FOR LOOP OUTPUT-----------------")
console.log(canDrink)
console.log("---------------------------------------------")
//----------------------------------------------------------------------


// return the same output with an array method

let ofAge = ages.filter(function(age){
  if (age >= 21) {
    return true
  }
})
console.log("------------ARRAY METHOD OUTPUT------------------")
console.log(ofAge)
console.log("-------------------------------------------------")



// optimize the code 
// this is the same as line 20 - 24
const ofAge2 = ages.filter(age => age >= 21)
console.log("------------ARRAY METHOD OUTPUT VERSION 2.0 -----")
console.log(ofAge2)
console.log("-------------------------------------------------")
