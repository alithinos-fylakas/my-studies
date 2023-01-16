// Dynamic colection of pairs key-value

const product = new Object
console.log(product)
product.name = "Chair"
product["font"] = "Helvetica"
product.price = 123

console.log(product)

delete product.price
delete product["font"]
console.log(product)

const car = {
    model: "ATM 2",
    value: 5000000,
    owner: {
        name: "Diovanna",
        age: 64,
        adress: {
            public_place: "fsv auR",
            number: 555
        }
    },
    conductors: [
        {
            name: "Alfred",
            age: 999
        },
        {
            name: "Senna",
            age: 34
        }
    ],
    accelerate: () => {
        //
    }
}

car.owner.adress.number = 505
console.log(car)

//delete car.conductors
delete car.owner.adress
delete car.accelerate
console.log(car)
console.log(car.conductors)
console.log(car.conductors.length)