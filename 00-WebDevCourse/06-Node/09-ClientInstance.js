const counterA = require("./07-UniqueInstance")
const counterB = require("./07-UniqueInstance")

const counterC = require("./08-NewInstance")()
const counterD = require("./08-NewInstance")()

counterA.inc()
counterA.inc()
console.log(counterA.value, counterB.value)

counterC.inc()
counterC.inc()
console.log(counterC.value, counterD.value)