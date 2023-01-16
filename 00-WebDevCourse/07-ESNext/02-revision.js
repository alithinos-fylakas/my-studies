// ES8: Object.values - Object.entries

const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Improvements on literal notation

const name = "Carla"
const person = {
    name,
    hi() {
        return "hi, guys"
    }
}

console.log(person.name, person.hi())

// CLass
class Animal {}
class Dog extends Animal {
    speak() {
        return "hulf hulf"
    }
}

console.log(new Dog().speak())
console.log(Dog)
console.log(new Dog())