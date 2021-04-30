const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const toRemove = ['b', 'c', 'g'];

// ES5 syntax
// const filteredArray = myArray.filter(function(data) { 
//   return toRemove.indexOf(data) < 0;
// });
// console.log(filteredArray)

myArray = myArray.filter( function( el ) {
  return !toRemove.includes( el );
} );