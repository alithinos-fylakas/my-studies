const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

app.post("/users", (req, ans) => {
    console.log(req.body)
    ans.send("<h1>Congratulations.</h1><br><h2>Included user!</h2>")
})

app.post("/users/:id", (req, ans) => {
    console.log(req.params.id)
    console.log(req.body)
    ans.send("<h1>Congratulations.</h1>\n<h2>Modified user!</h2>")
})

app.listen(5500)