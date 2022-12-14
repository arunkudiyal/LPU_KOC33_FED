// NOTE --> Everything and anything in JS is an Object.

// console.log('Hello from the JS File!')

// Print your messages
// console.error('This is an error!')
// console.warn('This is a warning!')
// Your documnet keeps on loading, and the HTML isn't rendered until OK is clicked for alert.
// alert('This is an Alert!')

// Interpreted -> Line by Line Execution
// data types in JS --> 1. Primitive Data Types (PDTs); 2. Non-Primitive Data Types (Non-PDTs)

// 1. Primitive Data Types (PDTs) -> 5
// i.) number
// num = 1008976.32412
// console.log( num )
// console.log( typeof(num) )

// print("The value of {} and {} is - {}", val1, val2, val3)

// ii.) string
// num1 = 10
// num2 = 20
// str1 = 'This is String One'
// str2 = "This is String Two"
// str3 = `This is String Three`
// // opStr = "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2)
// opStr = `The product of ${num1} and ${num2} is ${num1 * num2}`
// console.log(opStr)

// console.log(str1)
// console.log(str2)
// console.log(str3)

// console.log( typeof(str1) )
// console.log( typeof(str2) )
// console.log( typeof(str3) )

// iii.) boolean
// isHot = false
// isCool = true
// console.log(isHot)
// console.log(isCool)
// console.log( typeof(isHot) )
// console.log( typeof(isCool) )

// iv.) null
// variableOne = null
// console.log( variableOne )
// console.log( typeof(variableOne) )      // Object -> Bug from JS

// variableOne = 'This is a new value for the variable'
// console.log( variableOne )
// console.log( typeof(variableOne) )

// v.) undefined
// variableTwo = undefined
// console.log(variableTwo)
// console.log( typeof(variableTwo) )


// Conditional Statements
// Differences b/w JS in Python
// 1. No indentaion; using { } instead
// 2. elif <---> else if 

// num = 0
// if(num > 0) {
//     console.log(num + " is a positive number")
// } else if (num == 0) {
//     console.log(num + " is Zero")
// } else {
//     console.log(num + " is a negative number")
// }

// INTERNAL TYPECASTING
// int(input()) --> Python
// num2 = 0            
// console.log( typeof(num2) ) // string

// num1 = 0
// console.log( typeof(num1) ) // number

// // IMP :- '==' only compare the values; not the DT
// // if(num1 == num2) {
// //     console.log('YES!')
// // } else {
// //     console.log('NO')
// // }

// // IMP :- '==='
// if(num1 === num2) {
//     console.log('YES!')
// } else {
//     console.log('NO')
// }

// if(num2 == 100) {
//     console.log('TRUE')
// } else {
//     console.log('FALSE')
// }


// JS SCOPES -> let, var and const

// let --> private scoped variables; which are only accessed INSIDE the block
// var --> public scoped variable; which can be accseed BOTH, INSIDE & OUTSIDE the block
// const --> works like a private scoped variables, value can never change, not initialse the costant variable

// num1 = 100
// num2 = 50
// if(num1 > num2) {
//     // Adding 1 to num1 
//     num1 += 1
//     // Subtract 1 from num2
//     num2 -= 1
//     // log the updated sum of num1 and num2
//     let sum0
//     const sum1 = 200

//     sum0 = 100
//     // sum1 = num1 + num2
//     console.log(sum0)
//     console.log(sum1)
// } else {
//     // Subtract 1 to num1 
//     num1 -= 1
//     // Add 1 from num2
//     num2 += 1
//     // log the updated sum of num1 and num2
//     sum2 = num1 + num2
// }

// console.log(`The value of Sum - 1 is ${sum1}`)
// console.log(`The value of Sum - 2 is ${sum2}`)


// FUNCTIONS -->
// SYNTAX :- function functionName(parameters) { ...functionBody }
// function add(num1, num2) {
//     return num1 + num2
// }

// const answer = add(100, 200)
// console.log(answer)

// Higher Order Functions --> Any function which can treat any function like a varibale
// const newAddFunction = (parameters) => { ...functionBody }

const newAddFunction = (n1, n2) => {
    return n1 + n2
}

const newAns = newAddFunction(5, 50)
console.log(newAns)