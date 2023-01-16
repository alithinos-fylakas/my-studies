function getPrice(tax = 0, currency = "R$") {
    return `${currency} ${this.price * (1 - this.desc) * (1 + tax)}`
}

const prod = {
    name: "notebook",
    price: 4567,
    desc: 0.15,
    getPrice
}
globalThis.price = 20
globalThis.desc = 0.1
console.log(getPrice())
console.log(prod.getPrice())

const car = {price: 80000, desc: 0.2}

console.log(getPrice.call(car))
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.17, "$"))
console.log(getPrice.apply(car, [0.17, "$"]))
console.log(getPrice.apply(global, [0.17, "$"]))

