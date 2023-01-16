const isDiv4 = (number) => {
    if (number % 4){
        return false
    }
    return true
}

const fourHundredIn = (year) => {
    while (year >= 400){
        year -= 400
    }
    if (isDiv4(year)) {
        return true
    }
    return false
}

const oneHundredIn = (year) => {
    while (year >= 100){
        year -= 100
    }
    if (isDiv4(year)) {
        return true
    }
    return false
}

const isBissex = year => {
    if (fourHundredIn(year)){
        return true
    }
    if (oneHundredIn(year)){
        return false
    }
    if (isDiv4(year)){
        return true
    }
    return false
}

console.log(isBissex(2024))
console.log(isBissex(2023))
console.log(isBissex(2022))