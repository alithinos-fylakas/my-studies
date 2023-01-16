const salutation = "Hello" //lexical context 1

function exec() {
    const salutation = "Hi" //lexical context 2
    return salutation
}

const client = {
    name : "name",
    age : 20,
    weight : 70,
    id : 879087098,
    adress : {
        public_place : "Pretty Cool Street",
        number : 321,
        complement : "A"
    }
}

console.log(salutation)
console.log(exec())