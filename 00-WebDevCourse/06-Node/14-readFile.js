const fs = require("fs")

const path = __dirname + "/file.json"

//Synchronous
const content = fs.readFileSync(path, "utf-8")
console.log(content)

// Asynchronous
fs.readFile(path, "utf-8", (err, content) => {
    const config = JSON.parse(content) //Converts the string to an object
    console.log(`${config.db.host}:${config.db.port}`)
})

//Converts to an object too
const config = require("./file.json")
console.log(config.db)

fs.readdir(__dirname, (err, files) => {
    console.log("Directory content:")
    console.log(files)
})