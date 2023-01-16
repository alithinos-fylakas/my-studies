const drivers = ["Vettel", "Alonso", "Raikkonen", "Massa"]

drivers.pop() //Removes the last element

console.log(drivers)

drivers.push("Verstappen") //Adds to the last position of the array
console.log(drivers)

drivers.shift() //Removes the first element
console.log(drivers)

drivers.unshift("Hamilton") //Adds to the first position
console.log(drivers)

//Splice

// --Adding--
drivers.splice(2, 0, "Bottas", "Massa")
console.log(drivers)

// --Removing--
drivers.splice(3, 1)
console.log(drivers)

//Slice --> new array
const someDrivers = drivers.slice(2)
console.log(someDrivers)

const otherDrivers = drivers.slice(1, 4)
console.log(otherDrivers)