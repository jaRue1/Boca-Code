const person = {
  firstName: "Rue",
  lastName: "Johnson",
}
// remember that when passing a value to a function the vari
function displayName(people) {
  // Destructure the object
  const { firstName, lastName } = people;
  console.log("This is my full name " + firstName + " " + lastName)
}
displayName(person)

// passing arugment example
function myCar(driver, passenger1, passenger2, passenger3) {
  const driverSeat = driver; // Todd
  const frontSeat = passenger1;// Gaby
  const leftBackSeat = passenger2;// user1 which is Vicky
  const rightBackSeat = passenger3;// Michelle
  return driver
}

const user1 = "Vicky"
myCar("Todd", "Gaby", user1, "Michelle")
console.log(myCar("Todd", "Gaby", user1, "Michelle"))
