// Michelle's code challenge number 1
// print an array of only odd numbers
const numbers = [4,8,3,9,1,2,3,6,10]

console.log("------------FOR LOOP-------------")
for (let i = 0; i < numbers.length; i++) {
  const e = numbers[i];
  if (e % 2 != 0 ) {
    console.log(' Num ', numbers[i]) 
  }
}
console.log("---------WHILE LOOP--------------")
let x = 0
while (x < numbers.length) {
  if (numbers[x] % 2 != 0) {
    console.log('Num v2 ' , numbers[x])
  }
  x++
}
console.log("---------ARRAY METHOD MAP--------------")

const result = numbers.map(y => {
  let oddNum = numbers[y] % 2 != 0
  return oddNum
})
console.log("Result : ", result )

console.log("---------ARRAY METHOD FILTER--------------")
const oddNumbers = numbers.filter(numbers => numbers % 2)
console.log(oddNumbers)