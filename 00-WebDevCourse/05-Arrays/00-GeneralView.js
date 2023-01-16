//Array is an object, not a unique type

console.log(typeof Array, typeof new Array, typeof [])

let names = new Array("a", "e")

names = ["Anna", "Diovanna", "Carlitos", "Aurora", "Burrark"]

names[5] = "Nubia"
names.push("Kate")

console.log(names.length)

names[11] = "Martiorine"
console.log(names.length)
console.log(names)

names.sort()

console.log(names)

delete names[0]

names.splice(4, 1) //May be used to remove and add elements
console.log(names)
console.log(names.length)