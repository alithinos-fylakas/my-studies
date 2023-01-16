const technology = new Map()

technology.set("react", { framework: false })
technology.set("angular", { framework: true})

console.log(technology)
console.log(typeof technology)

console.log()

console.log(technology.get("react"))
console.log(technology.get("react").framework)

const assortedKeys = new Map([
    [function () {}, "function"],
    [{}, "object"],
    [123, "number"]
])

assortedKeys.forEach( (value, key) => {
    console.log(key, value)
})

console.log(assortedKeys.has(123))
assortedKeys.delete(123)
console.log(assortedKeys.has(123))
console.log(assortedKeys.size)

assortedKeys.set(123, "a")
assortedKeys.set(123, "b")

console.log(assortedKeys.get(123))
console.log(assortedKeys)