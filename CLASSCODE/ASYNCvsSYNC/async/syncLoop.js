// Synchronous way of using a loop
console.log("----------- SYNCHRONOUS EXAMPLE ----------------------")
for (let index = 10; index >= 1; index--) {
  console.log(+index);
  if (index === 1) {
    console.log("BLAST OFF !");
  }
}
console.log("----------- ASYNCHRONOUS EXAMPLE ----------------------")
// Asynchronous way of using a loop
function countDown(startValue,callback) {
  for (let index = startValue; index >= 1; index--) {
    console.log(+index);
    if (index === 1) {
      callback()
    }
  }
}
countDown(10, ()=>{
  console.log('BLAST OFF')
})
console.log("-------------ASYNCHRONOUS EXAMPLE--------------------")
countDown(4, ()=>{
  console.log('GO')
})
