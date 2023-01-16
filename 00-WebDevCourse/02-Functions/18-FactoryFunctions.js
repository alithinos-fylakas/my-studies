//Other factory

const createPerson = (name, last_name) => {
    return {
        name: name,
        last_name: last_name,
        discount: 45,
        current_price: 500,
        apply_disc: (current, discount) => {
            return current - discount
        }
    }
}

console.log(createPerson("Carlos", "Veras"))
console.log(createPerson("Diovanna", "Diorno").apply_disc()) //NaN