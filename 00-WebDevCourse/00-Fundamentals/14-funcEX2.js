//Function on a variable
const printSum = function (a, b) {
    console.log(a + b)
}

printSum(2, 3)

//Arrow function
const sum = (a, b) => {
    return a + b
} 

console.log(sum(2, 3))

//Hidden return
const subtraction = (a, b) => a - b

console.log(subtraction(2, 3))