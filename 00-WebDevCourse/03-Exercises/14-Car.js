
const purchaseCar = (type) => {
    switch (type){
        case "hatch":
            return "Sucessful purchase"
        case "sedan":
        case "motorcycle":
        case "pickup truck":
            return "Are you sure you don't prefer this model?"
        default:
            return "That car is not on our budget here :)"
    }
}

console.log(purchaseCar("hatch"))
console.log(purchaseCar("sedan"))
console.log(purchaseCar("motorcycle"))
console.log(purchaseCar("pickup truck"))
console.log(purchaseCar(":)"))