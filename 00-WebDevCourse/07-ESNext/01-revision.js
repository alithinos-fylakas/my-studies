// Arrow Function

const sum = (a, b) => a + b
console.log(sum(2, 3))

// Arrow Function (this)
const lexic1 = () => console.log(this === exports)
const lexic2 = lexic1.bind({})

lexic1()
lexic2()

// Default parameter
function printf(text = "Node") {
    console.log(text)
}
printf()
printf("Ohmaga")
printf(undefined)
printf(null)

// Rest operator
function total(...numbers) {
    let total = 0
    numbers.forEach( n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))