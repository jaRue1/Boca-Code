// Synchronous: most languages run LINE BY LINE, Ex Line 1 then Line 2 (Keyword Procedural)    
// Asynchronous: JavaScript is able to run multiple functions at once 

// start first 
console.log('Start ...')
// middle will print last 
setTimeout(()=> {
console.log('...Middle...')
},1000)
// Finish will print second
console.log('...Finish')