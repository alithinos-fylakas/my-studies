const values = [4.5, 6.7, 7.8, 8.9]

console.log(values[0], values[3])
console.log(values[4])

values[4] = 10
console.log(values)
console.log(values.length)

values.push( {id: 5}, false, null, "test" )
console.log(values)

console.log(values.pop())

delete values[0]
console.log(values)

console.log(typeof values)