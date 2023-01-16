const person = {
    salutation: "Good morning",
    speak(){
        console.log(this.salutation)
    }
}

person.speak()

const speak = person.speak //Conflict of paradigms between functional and oop
speak()

const speakOfPerson = person.speak.bind(person)
speakOfPerson()