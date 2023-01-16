// It's a Set woooow

const set = new Set()

set.add("Flamengo")
set.add("Vasco").add("Palmeiras").add("Corinthians")
set.add("São Paulo")
set.add("Flamengo")
set.add("Vasco")

console.log(set)
console.log(set.size)
console.log(set.has("flamengo"))
console.log(set.has("Flamengo"))
set.delete("Vasco")
console.log(set.has("Vasco"))

const names = ["Rachel", "Luca", "Julia", "Monica", "Luca", "Diovanna"]
const namesSet = new Set(names)

console.log(namesSet)