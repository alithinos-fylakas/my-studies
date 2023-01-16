function sum(){
    let sum = 0
    for (i in arguments){
        sum += arguments[i]
    }
    return sum
}

console.log(sum())
console.log(sum(1))
console.log(sum(1.1, 2.2, 3.3, 4.4))

console.log(sum(1.1, 2.2, "test"))
console.log(sum("a", "b", "c"))