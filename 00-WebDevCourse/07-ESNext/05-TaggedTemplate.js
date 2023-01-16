function real(pieces, ...values){
    const result = []
    values.forEach( (value, index) => {
        //value = isNaN(value) ? value : `R$${value.toFixed(2)}`
        if (!isNaN(value)) {
            value = `R$${value.toFixed(2)}`
        }

        result.push(pieces[index], value)
    })
    return result.join("")
}

const price = 29.99
const pricePortion = 11
console.log(real `1x of ${price} or 3x of ${pricePortion}.`)