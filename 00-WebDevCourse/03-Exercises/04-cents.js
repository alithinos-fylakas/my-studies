
console.log(0.1 + 0.2)

const format = (number = 0.1 + 0.2) => {
    strnum = `R$${number.toFixed(2)}`.replace(".", ",")
    console.log(strnum)
}

format()