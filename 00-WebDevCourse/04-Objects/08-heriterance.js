const dad = { name: "Sebá", colorHair: "black"}

const daughter = Object.create(dad)
daughter.name = "Hanna"
console.log(daughter.colorHair)

const sisterOfdaughter = Object.create(dad, {
    name: {value: "Beatrice", writable: false, enumerable: true}
})

console.log(sisterOfdaughter.name)
sisterOfdaughter.name = "Carlita"
console.log(`${sisterOfdaughter.name}'s hair is ${sisterOfdaughter.colorHair}`)

console.log(Object.keys(daughter))
console.log(Object.keys(sisterOfdaughter))

for (let key in sisterOfdaughter){
    console.log(key)
    sisterOfdaughter.hasOwnProperty(key) ?
        console.log(key) : console.log(`By heriterance: ${key}`)
}