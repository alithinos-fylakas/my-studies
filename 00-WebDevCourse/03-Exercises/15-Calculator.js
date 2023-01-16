
class MathC {
    constructor() {}

    sum(...values){
        let result = 0
        values[0].forEach(v => {
            result += v
        })
        return result
    }

    sub(...values){
        let result = 2 * values[0][0]
        values[0].forEach(v => {
            result -= v
        })
        return result
    }

    multi(...values){
        let product = 1
        values[0].forEach(v => {
            if (v === 0){
                return 0
            }
            product *= v
        })
        return product
    }

    div(...values){
        let quotient = values[0][0] * values[0][0]
        values[0].forEach(v => {
            if (v === 0){
                return NaN
            }
            quotient /= v
        })
        return quotient
    }

    pow(base, expo){

        if (expo === 0){
            return 1
        }

        const values = []

        for (let i = 0; i < expo; i++){
            values.push(base)
        }
        //console.log(values)

        if (expo > 0){
            return this.multi(values)
        }
        if (expo < 0){
            return 1 / this.multi(values)
        }
    }

    sqrt(base, index){
        let root = 0.1
        while ( this.pow(root, index) < base){
            root += 0.1
        }
        return root
    }
}

class CalcApp{
    constructor(){
        this.operator = ""
        this.values = null
        this.MathC = new MathC()
    }

    separator(...values){
        this.operator = values[0]
        this.values = values.slice(1).map(function(v){
            return Number(v)
        })
        console.log(this.operator)
        console.log(this.values)
    }

    printOutRes(showoff){
        console.log(`The final answer is: ${showoff}! :)`)
    }
    
    calc(...values){
        this.separator(...values)
        let res = 0
        switch (this.operator){
            case "+":
                res = this.MathC.sum(this.values)
                break
            case "-":
                res = this.MathC.sub(this.values)
                break
            case "*":
                res = this.MathC.multi(this.values)
                break
            case "/":
                res = this.MathC.div(this.values)
                break
            case "pow":
                res = this.MathC.pow(this.values[0], this.values[1])
                break
            case "sqrt":
                res = this.MathC.sqrt(this.values[0], this.values[1])
                break
            default:
                res = NaN
        }
        this.printOutRes(res)
    }
}

const calc = new CalcApp()

calc.calc("+", 1, 2, 3)
calc.calc("-", 1, 2, 3)
calc.calc("*", 1, 2, 3)
calc.calc("/", 1, 2, 3)
calc.calc("pow", 2, 2)
calc.calc("sqrt", 8, 3)