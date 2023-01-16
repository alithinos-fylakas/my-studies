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

const person = name => {
    return {
        speak: () => console.log(`My name is ${name}.`)
    }
}

const p2 = person("Carlos")
p2.speak()