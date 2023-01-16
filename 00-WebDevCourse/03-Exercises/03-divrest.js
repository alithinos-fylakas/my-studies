
const div_remainder = (dividend, divider) => {
    return {
        quotient: dividend / divider,
        remainder: dividend % divider
    }
}

console.log(div_remainder(10, 2))
console.log(div_remainder(9, 2))

console.log(div_remainder(10, 2).quotient)
console.log(div_remainder(10, 2).remainder)

const object = div_remainder(11, 2)

console.log(object.quotient)
console.log(object.remainder)