
const books = [{ name: "book 0",rating: 4.25,},
  { name: "book 1", rating: 4.22 },
  { name: "book 2", rating: 4.23 },
  { name: "book 3", rating: 4.28 },
  { name: "book 4", rating: 4.27 },
  { name: "book 5", rating: 4.26 },
  { name: "book 6", rating: 4.24 }]

  // the pro way to do it 
  function returnTopBooks(books) {
  const topBooks = books.filter((book) => {
    return book.rating >= 4.25
  })
  return topBooks
}
console.log("----------- Using Array Method Filter ------------")
console.log(returnTopBooks(books))
// the technical interview way (HARD WAY)
function returnTopBooks1(books) {
  let topBooks = []
  for (let i = 0; i < books.length; i++) {
    if (books[i].rating >= 4.25) {
      topBooks.push(books[i])
    }
  }
  return topBooks
}
console.log("----------- Using For Loop ------------")
let goodBooks = returnTopBooks1(books)
 console.log(goodBooks)
