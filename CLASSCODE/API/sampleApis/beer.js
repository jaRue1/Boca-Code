// assigning the value of the json file beer.json to the constant variable ales
const ales = require("./data/beer.json");

// this function displays a list of beers that have been reviewed 300 or more times.
// exports...
exports.getAles = function () {
  console.log('-------------------------BEERS FUNCTION ------------------------------')
  ales.forEach(function (ales) {
    if (ales.rating.reviews >= 300 ) {
      console.log(ales.id, ales.name, " ( # of Reviews " , ales.rating.reviews , ")");
    }
  });
  console.log('-------------------------------------------------------')
};
