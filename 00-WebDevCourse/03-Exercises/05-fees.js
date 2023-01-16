const simpleFee = (capital = 1, fee = 0.1, time = 1) => {
    return capital + fee * capital * time
}

console.log(simpleFee())
console.log(simpleFee(1234, 0.01, 12))

const compoundFee = (capital = 1, fee = 0.1, time = 1) => {
    if (time < 1){
        return capital
    }

    let amount = capital
    for (let i = 0; i < time; i++){
        amount *= (1 + fee)
    }
    return amount
}
/*
const recCompoundFee = (capital = 1, fee = 0.1, time = 12) => {
    if (time < 1){
        return capital * fee
    }

    if (fee < 1){
        fee = 1 + fee
    }
    console.log(fee)
    return recCompoundFee(capital, fee * fee, time - 1)
}
*/

console.log(compoundFee(1000, 0.12, 2))
console.log(compoundFee(1234, 0.01, 12))
console.log(compoundFee(1234, 0.01, 24))
console.log(compoundFee(1234, 0.01, 36))
console.log(compoundFee(1234, 0.01, 48))
console.log(compoundFee(1234, 0.01, 60))
console.log(compoundFee(1234, 0.01, 72))
console.log(compoundFee(1234, 0.01, 84))
console.log(compoundFee(1234, 0.01, 96))
console.log(compoundFee(1234, 0.01, 108))
console.log(compoundFee(1234, 0.01, 120))
console.log(compoundFee(1234, 0.01, 132))
console.log(compoundFee(1234, 0.01, 144))
console.log(compoundFee(1234, 0.01, 156))
console.log(compoundFee(1234, 0.01, 168))
console.log(compoundFee(1234, 0.01, 180))
console.log(compoundFee(1234, 0.01, 192))
console.log(compoundFee(1234, 0.01, 204))

console.log("")

console.log(recCompoundFee(1000, 0.01, 60))