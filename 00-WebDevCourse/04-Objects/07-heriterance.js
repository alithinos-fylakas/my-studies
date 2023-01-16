//Prototype chain

Object.prototype.attr0 = "Z" //Don't do it...

const grandpa = { attr1: "A" }
const dad = { __proto__: grandpa, attr2: "B", attr3: "3" }
const son = { __proto__: dad, attr3: "C" }

console.log(son.attr0)
console.log(son.attr1)
console.log(son.attr2)
console.log(son.attr3)

const car = {
    currentSPD: 0,
    maxSPD: 200,
    accelerate(delta) {
        if (this.currentSPD + delta <= this.maxSPD){
            this.currentSPD += delta
            return
        }
        this.currentSPD = this.maxSPD
    },
    status() {
        return `${this.currentSPD}Km/h of ${this.maxSPD}Km/h`
    }
}

const ferrari = {
    model: "F40",
    maxSPD: 324
}

const volvo = {
    model: "V40",
    status() {
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.accelerate(50)
console.log(volvo.status())

ferrari.accelerate(300)
console.log(ferrari.status())