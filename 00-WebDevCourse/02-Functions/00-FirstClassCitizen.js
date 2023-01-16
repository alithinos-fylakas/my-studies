//Function in JS is a First-Class Object (Citizens)
//Higher-order function

//To create in literal function
function func() { }

//Assign a function to a variable/constant
const func2 = function () { }

//Assign functions in an array
const array = [function (a, b) {return a + b}, func, func2]

console.log(array[0](2, 3))

//Assign as an attribute of objects
const obj = {}
obj.speak = function () { return "Hi" }
console.log(obj.speak())

//To pass a function as a parameter
function run(fun){
    fun()
}

run(function () { console.log("Executing...") })

//A function can return or contain other function
function sum(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

sum(5, 6)(4)
const fivePlus = sum(2, 3)
fivePlus(4)