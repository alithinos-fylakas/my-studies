const port = 3003

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const dataBase = require("./database.js")

/*
app.get("/produtcts", (req, res, next) => {
    console.log("Middleware 1...")
    next()
})
*/

app.use(bodyParser.urlencoded( { extended: true} ))

app.get("/products", (req, ans, next) => {
    // ans.send( { name: "Notebook", price: 1234.99} ) //Converts to JSON
    ans.send(dataBase.getProducts())
})

app.get("/products/:id", (req, ans, next) => {
    ans.send(dataBase.getProduct(req.params.id))
})

app.post("/products", (req, ans, next) => {
    const product = dataBase.saveProd({
        name: req.body.name,
        price: req.body.price
    })
    ans.send(product) //JSON
})

app.put("/products/:id", (req, ans, next) => {
    const product = dataBase.saveProd({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    ans.send(product) //JSON
})

app.delete("/products/:id", (req, ans, next) => {
    const product = dataBase.delProd(req.params.id)
    ans.send(product) //JSON
})

app.listen(port, () => {
    console.log(`Server is executing on port ${port}.`)
})