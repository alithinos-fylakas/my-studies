function printSum(a, b){
    console.log(a + b)
}

printSum(2, 3)
printSum(2)
printSum(2, 50, 4, 5, 6, 7, 8)
printSum()

//With return

function sum(a, b = 0){
    return a + b
}

console.log(sum(2, 3))
console.log(sum(2))