const moduleA = require("../../00-Modules")
console.log(moduleA.hi)

const salutation = require("salutation")
console.log(salutation)

const c = require("./dirC/index")
console.log(c.hi2)

const cc = require("./dirC")
console.log(cc.hi2)

const http = require("http")
http.createServer( (req, res) => {
    res.write("Ohayo")
    res.end()
}).listen(8080)