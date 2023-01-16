/*
class Person {
    constructor (name) {
        this.name = name
    }

    speak(){
        console.log(`My name is ${this.name}.`)
    }

}

const p1 = new Person("Carlos")
p1.speak()
*/

function Persona(name) {

    this.name = name

    this.speak = () => {
        console.log(`My name is ${this.name}!`)
    }
}

const Carlos = new Persona("Carlos")

Carlos.speak()