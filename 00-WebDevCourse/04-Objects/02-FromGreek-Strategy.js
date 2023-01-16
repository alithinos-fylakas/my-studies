//Literal
const obj1 = {}
console.log(obj1)

//Object in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Constructor functions
function Product(name, price, desc) {
    this.name = name
    this.price = price
    this.desc = desc

    this.getDiscount = () => {
        return price * (1 - desc)
    }
}

const p1 = new Product("pen", 7.99, 0.15)
const p2 = new Product("eraser", 5.99, 0.5)
console.log(p1.getDiscount(), p2.getDiscount())

//Factory

function createEmployee(name, salary, absence) {
    return {
        name,
        salary,
        absence,
        getSalary() {
            return (salary/30) * (30 - absence)
        }
    }
}

const f1 = createEmployee("John", 7890, 4)
const f2 = createEmployee("Mary Jane", 11400, 1)
console.log(f1.getSalary(), f2.getSalary())

//Object.create
const daughter = Object.create(null)
daughter.name = "Ana"

// Famous function that returns an Object
const fromJSON = JSON.parse('{"info": "I am a JSON"}')
console.log(fromJSON.info)