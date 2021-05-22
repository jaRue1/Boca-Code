// Count Vowels 
// Given a string , S count the number of a,e,i,o,u, occurrences individually. Ignore Case
// S = ' acbkdngkfjsjfabceixjualpstovi'
// Desired Output a = 3 , e = 1,

let s = 'acaaabkdngkfjsjfabceixjualpstovi'

if(s.includes('a')||s.includes('e')||s.includes('i')||s.includes('o')||s.includes('u')){
  let a = s.match(/a/g)
  let e = s.match(/e/g)
  let i = s.match(/i/g)
  let o = s.match(/o/g)
  let u = s.match(/u/g)
  console.log('a = ' +a.length)
  console.log('e = ' +e.length) 
  console.log('i = ' +i.length) 
  console.log('o = ' +o.length) 
  console.log('u = ' +u.length) 

}
else{
  return console.log('no vowels')
}