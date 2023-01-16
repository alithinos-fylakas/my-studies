const numbers = [1, 2, 3, 4, 5]

//For with purpose
let result = numbers.map(function(e){
    return e*2
})

console.log(result, numbers)

const sum10 = e => e + 10
const double = e => e * 2
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

result = numbers.map(sum10).map(double).map(toMoney)
console.log(result)