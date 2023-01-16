//New feaure ES2015

//Destructuring 1
const person = {
    name : "Carlos",
    age : 5,
    adress : {
        public_place : "ABC street",
        number : 20
    }
}

const { name, age} = person

console.log( name, age)

const {name : n, age : i} = person

console.log(n, i)

const {lastname, good_humored = true} = person

console.log(lastname, good_humored)

const { adress : { public_place, number, cep} } = person

console.log(public_place, number, cep)

//Destructuring 2
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, grade]] = [[, 8, 8], [9, 6, 8]]
console.log(grade)

//Destructuring 3

/*function rand({ min = 0, max = 1000 }) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

const object = {max : 50, min : 20}
console.log(rand(object))
console.log(rand({ min : 955 }))
console.log(rand({}))
console.log(rand())
*/

//Destructuring 4

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

console.log(rand[50, 40])
console.log(rand([992]))
console.log([, 2344])