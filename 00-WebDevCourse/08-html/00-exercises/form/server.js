const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

app.post("/users", (req, ans) => {
    console.log(req.body)
    ans.send("<h1>Congratulations</h1>")
})

app.listen(5500)