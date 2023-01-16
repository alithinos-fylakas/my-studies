
const expo = (base, expoent) => {
    if (expoent == 0){
        return 1
    }
    let xp = 1;
    for (let i = 0; i < expoent; i++){
        xp *= base
    }
    return xp
}

const sum = (a, b) => {
    return a + b
}

const multi = (a, b) => {
    if (b === 1){
        return a
    }
    return sum(a, multi(a, b - 1))
}

const pow = (base, expoent) => {
    if (expoent === 0){
        return 1;
    }
    return multi(base, pow(base, expoent - 1) )
}
//This recursive way works, but definitely is not optmized


console.log(expo(2, 2))
console.log(expo(10, 5))
console.log(expo(3, 4))

console.log()

console.log(pow(2, 2))
//console.log(pow(10, 5))
console.log(pow(3, 4))