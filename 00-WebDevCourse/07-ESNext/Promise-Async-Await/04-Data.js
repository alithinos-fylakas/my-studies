const fs = require("fs")
const path = require("path")

const pathing = path.join(__dirname, "data.txt")

function printContent(_, content){
    console.log(content.toString())
}

/*
console.log("Start . . .")
fs.readFile(pathing, printContent)
fs.readFile(pathing, (_, content) => console.log(content.toString))
console.log(". . . End")
*/

console.log("Start sync . . .")
const content = fs.readFileSync(pathing)
console.log(content.toString())
console.log(". . . End Sync")
