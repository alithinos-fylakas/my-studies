//A constant object points to the memory adress of the object, not to its content
//In this case, the constant just maintain this memory adress and the content of the object is still mutable

const person = { name: "John"}
person.name = "Paul"
console.log(person)

//person = { name: "Ana"}

Object.freeze(person)

person.name = "Maria"
person.end = "fsv auR"
delete person.name

console.log(person.name)
console.log(person)