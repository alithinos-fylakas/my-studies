const almostArray = {
    0: "Rapha",
    1: "Ana",
    2: "Bia"
}
console.log(almostArray)

Object.defineProperty(almostArray, "toString", {
    value: function() {
        return Object.values(this)
    },
    enumarable: false
})

console.log(almostArray[0])

const DearArray = ["Rapha", "Ana", "Bia"]
console.log(almostArray.toString(), DearArray)