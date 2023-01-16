const ferrari = {
    model: "F40",
    maxSPD: 324
}

const volvo = {
    model: "V40",
    maxSPD: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MyObject() {}
console.log(typeof Object, typeof MyObject)
console.log(Object.prototype, MyObject.prototype)