const moduleA = require("./00-Modules")
const moduleB = require("./01-Modules")

console.log(moduleA.welcome)
console.log(moduleA.seeYouSoon)

console.log(moduleB.GoodMorning)
console.log(moduleB.GoodNight())

const uModuleA = require("./00-Modules")
const uModuleB = require("./01-Modules")

console.log(uModuleA.hi)
console.log(uModuleA.seeYa)
console.log(uModuleA.youre_welcome)

console.log(uModuleB.GoodMorningJ)
console.log(uModuleB.GoodNightJ)