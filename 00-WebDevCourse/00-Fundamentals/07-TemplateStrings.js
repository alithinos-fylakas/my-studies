const name = "Rebeca"

const template = `
    Hi,
    ${name}!`

//I don't know what to feel about this

console.log(template)

console.log(`1 + 1 = ${1 + 1}!`)

const up = text => {
    text.toUpperCase()
    console.log(text)
}

const upper = text => text.toUpperCase()

up(name)

console.log(up(name))
console.log(upper(name))