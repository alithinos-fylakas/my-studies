//let and var

{
    var a = 2
    let b = 2
    console.log(b)
}

console.log(a)

//Template string

const prod = "iPad"
console.log(`${prod}
is
expensive`)

//Destructuring

const [l, e, ...tters] = "Ohmaga"

console.log(l, e, tters)

const [x, y] = [1, 2]
console.log(x, y)

const [alpha, , beta] = [1, 2, 3, 4, 5]
console.log(alpha, beta)

const { age, name } = { name: "Diovanna", age: 18 }
console.log(age, name)