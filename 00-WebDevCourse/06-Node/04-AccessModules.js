//const moduleA = require('../../00-Modules')
//console.log(moduleA.welcome)

const salutation = require("salutation")
console.log(salutation.salutation)

const c = require("./dirC/index")
console.log(c.hi)

/*
const http = require('http')
http.createServer( (req, res) => {
    res.write("Good morning")
    res.end()
}).listen(8080)
*/