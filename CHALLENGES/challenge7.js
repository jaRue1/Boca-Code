// Write an algorithm to sort 2 numbers , a and b, putting them array, with the smaller number

let a = 576
let b = 458

let arr = []

if (b < a){
  arr.push(b)
  arr.push(a)
}
else{
  arr.push(a)
  arr.push(b)
}


console.log(arr)