let isActive = false

console.log(isActive)

isActive = true

console.log(isActive)

isActive = 1

console.log(!!isActive)
console.log(!isActive)

//All integers, except 0, return true
//Arrays return true
//The Infinity returns true

//0 returns false
//An empty string returns false
//null returns false
//NaN (Not a Number) returns false
//undefined returns false

let name = ""
console.log(name || "Desconhecido")
