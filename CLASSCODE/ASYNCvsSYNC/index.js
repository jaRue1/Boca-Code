let person ={
  firstName : "Synchronous",
  lastName : "Version"
}
let person2 ={
  firstName : "Asynchronous",
  lastName : "Version"
}
// this is a SYNCHRONOUS version-----------------------------
function myTestSync(){
  const myFullName = `${person.firstName} ${person.lastName}`
  return myFullName
}
const myName = myTestSync(person)
console.log(myName)
//------------------------------------------------------------

// this is a ASYNCHRONOUS version-----------------------------
function myTestAsync(person2,callback){
  const myFullName = `${person2.firstName} ${person2.lastName}`
  callback(myFullName)
}
// passing an object and a anonymous function
myTestAsync(person2, (myName) => {
  console.log(myName)
 })
//------------------------------------------------------------