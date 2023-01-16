
const weight = 1.0

const other_weight = Number("2.0")

console.log(weight, other_weight)
console.log(Number.isInteger(weight))
console.log(Number.isInteger(other_weight))

const test_calc = 9.789
const test_mdl = 9.8

const total = test_calc * weight + test_mdl * other_weight

const media = total / (weight + other_weight)

console.log(media)
console.log(media.toFixed(2)) //fixes the numbers after the points
console.log(media.toString(2)) //to binary