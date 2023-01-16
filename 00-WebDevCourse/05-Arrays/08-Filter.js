const products = [
    {name: "Notebook", price: 4789, fragile: true},
    {name: "Generic smartphone", price: 3597, fragile: true},
    {name: "Glass cup", price: 17.87, fragile: true},
    {name: "Plastic cup", price: 19.21, fragile: false}
]

const isExpensive = (p) => {
    if (p.price > 2500) {
        return true
    }
    return false
}
const isFragile = (p) => {
    if (p.fragile) return true
    return false
}

console.log(products.filter(function(e){
    return false
}))

console.log(products.filter(isExpensive).filter(isFragile))