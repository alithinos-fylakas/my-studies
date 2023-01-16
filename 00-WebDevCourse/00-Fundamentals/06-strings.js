const text = "Ensino médio, né, gente?"

console.log(text.charAt(22))
console.log(text.charAt(23))
console.log(text.charAt(24))
console.log(text.charAt(25))

console.log()

console.log(text.charCodeAt(22))

console.log(text.indexOf("?"))

console.log(text.substring(1))
console.log(text.substring(0, 10))

console.log("Valeska says: ".concat(text).concat(" Hehehe!"))

console.log(text.replace(/\o/, "cu"))
console.log(text.replace(/\w/g, "hehehe"))

console.log("Ana,Maria,Pedro".split(","))

//Regex is something important to give atention :(