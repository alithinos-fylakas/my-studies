let a = 1
console.log(a)

let p = new Promise( function(fulfillPromise){
    fulfillPromise({
        x: 3,
        y: 2
    })
})

console.log(typeof p)

p
    .then(function(value){
    console.log(value.x)
    return [value.x, value.y]
})
    .then(function(value){
        console.log(value[0], value[1])
    })


const promise = new Promise( fulfillPromise => {
    fulfillPromise( ["Hanna", "Carlo", "Nana", "Bete", "Diovanna"] )
})

// The fulfillPromise is usually called "resolve"

const firstE = e => e[0]
const lowerCase = l => l.toLowerCase()

promise
    .then(firstE)
    .then(firstE)
    .then(lowerCase)
    .then(console.log)