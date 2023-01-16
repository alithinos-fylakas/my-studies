//Object.preventExtensions
const product = Object.preventExtensions({
    name: "Qualquer", price: 1.99, tag: "promotion"
})

console.log("Extensible:", Object.isExtensible(product))

product.name = "Eraser"
product.descricao = "White school eraser"
delete product.tag
console.log(product)

//Object.seal
const person = { name: "Eleanor", age: 35 }
Object.seal(person)
console.log("Sealed:", Object.isSealed(person))
console.log(person)

person.lastName = "Silva"
delete person.name
person.age = 30

console.log(person)

//Object.freeze = sealed + constant values