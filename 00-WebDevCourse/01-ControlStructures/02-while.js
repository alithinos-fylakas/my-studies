/*
function getIntRandomBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while (option != -1){
    option = getIntRandomBetween(-1, 10)
    console.log(`Option chose was ${option}.`)
}

console.log("Until next time, folks")
*/

function getIntRandomBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0 //Here, because of do-while, we don't need to assign a value to the variable

do {
    option = getIntRandomBetween(-1, 10)
    console.log(`Option chose was ${option}`)
} while (option != -1)

console.log("Until next time, folks")