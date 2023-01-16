// Operator ... rest/spread
// To use rest with the parameter of a function

// To use spread with an object

const employee = { name: "Maria", salary: 12345.67}
const clone = { asset: true, ...employee }

console.log(employee)
console.log(clone)

// Spread with an array

const Agroup = ["João", "Gloria", "John"]
const Bgroup = ["Maria", "Rapha", ...Agroup]
console.log(Bgroup)