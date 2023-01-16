
function factorial(number) {
    if (number < 1){
        return 1
    }

    return number * factorial(number - 1)
}

console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))