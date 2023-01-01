// DOCUMENT OBJECT MODEL (DOM)

// console.dir(document)
// console.dir(document.URL)
// console.dir(document.all)

// Access the div
// console.log( document.all )
// console.log( document.all[17] )

// Identifier Methods -> 5 methods

// i.) getElementById() --> Only only element ref is returned
// SYNTAX --> document.getElementById('anyId')
// const mySubmitButton = document.getElementById('submitBtn') 
// console.log(mySubmitButton)

// ii.) getElementsByClassName --> Array of elements is returned
// console.log(  )
// myLis = document.getElementsByClassName('list-group-item')
// console.log( myLis[1] )
// console.log( myLis[2] )
// console.log( myLis[3] )
// console.log( myLis[4] )

// iii.) getElementsByTagName --> Array of elements is returned
const myh2s = document.getElementsByTagName('h2')
console.log(myh2s)
console.log(myh2s[0])
console.log(myh2s[1])