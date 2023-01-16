/*
function isBiggerThan7(grade){
    if (grade >= 7){
        console.log("Approved with ", grade)
    }
}

isBiggerThan7(7)
isBiggerThan7(9)

function isItTrue(value) {
    if (value) {
        console.log(value)
    }
}

isItTrue()
isItTrue(null)
isItTrue(undefined)
isItTrue(NaN)
isItTrue("")
isItTrue(0)
isItTrue(-1)
isItTrue(" ")
isItTrue("?")
isItTrue([])
isItTrue([1, 2])
isItTrue({})
*/

/*
function test1(num) {
    if (num > 7)
        console.log(num)
    console.log("Final")
}

test1(6)
test1(8)

function test2(num){
    if (num > 7); { //Be careful...
        console.log(num)
    }
}

test2(6)
test2(8)
*/

/*
const printResult = function(grade) {
    if (grade >= 7){
        console.log("Approved")
    } else {
        console.log("Disapproved")
    }
}

printResult(10)
printResult(4)
printResult("Uepaaa") //Be careful here
*/

Number.prototype.between = function (start, end){
    return this >= start && this <= end
}

const printResult = function (grade){
    if (grade.between(9, 10)){
        console.log("Honor board")
    } else if (grade.between(7, 8.99)){
        console.log("Approved")
    } else if (grade.between(4, 6.99)){
        console.log("Recovery")
    } else if (grade.between(0, 3.99)){
        console.log("Disapproved")
    } else {
        console.log("Invalid grade")
    }

    console.log("End")
}

printResult(10)
printResult(8)
printResult(6)
printResult(2)
printResult(11)
printResult(-1)