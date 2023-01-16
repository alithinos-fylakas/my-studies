
const isDiv3 = (number) => {
    if (number % 3){
        return false
    }
    return true
}

console.log(isDiv3(3))
console.log(isDiv3(9))
console.log(isDiv3(28))