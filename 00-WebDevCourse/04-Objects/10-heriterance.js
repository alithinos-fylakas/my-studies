console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split("").reverse().join("")
}

console.log("Hi, man, what's up?".reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(["a", "blur", "c"].first())

String.prototype.toString = function () {
    return "Everything was messed up"
}

console.log("Hi, man, what's up?".reverse())