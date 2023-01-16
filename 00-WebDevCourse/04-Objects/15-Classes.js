class Grandpa {
    constructor(lastName) {
        this.lastName = lastName
    }
}

class Dad extends Grandpa {
    constructor(lastName, profession = "Teacher"){
        super(lastName)
        this.profession = profession
    }
}

class Son extends Dad {
    constructor() {
        super("Silva")
    }
}

const son = new Son
console.log(son)
console.log(Dad)
console.log(Grandpa)