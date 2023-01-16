
function Calculator(value1 = 0, value2 = 0){
    this.n1 = value1
    this.n2 = value2

    this.printOut = () => {
        console.log(`The values are ${this.n1} and ${this.n2}!`)
    }

    this.sum = (number1 = this.n1, number2 = this.n2) => {
        return number1 + number2
    }

    this.sub = (number1 = this.n1, number2 = this.n2) => {
        return number1 - number2
    }

    this.multi = (number1 = this.n1, number2 = this.n2) => {
        return number1 * number2
    }

    this.div = (number1 = this.n1, number2 = this.n2) => {
        return number1 * number2
    }
}

const calc = new Calculator()
calc.printOut()
console.log(calc.sum())
console.log(calc.sum(1, 2))
console.log(calc.sub())
console.log(calc.sub(1, 2))
console.log(calc.multi())
console.log(calc.multi(1, 2))
console.log(calc.div())
console.log(calc.div(1, 2))