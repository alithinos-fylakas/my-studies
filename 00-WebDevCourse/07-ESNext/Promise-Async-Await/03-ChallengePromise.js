const fs = require("fs")
const path = require("path")

const pathing = path.join(__dirname, "data.txt")

function getPromiseData(path){
    return new Promise((resolve, reject) => {
        const content = fs.readFileSync(path).toString()
        resolve(content)
    })
}

function readFileData(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, (_, content) => {
            resolve(content.toString())
        })
    })
}

getPromiseData(pathing)
    .then(console.log)

readFileData(pathing)
    .then(console.log)