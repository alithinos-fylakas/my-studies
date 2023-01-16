const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Without callback
let badGrades = []
for (let i in grades){
    if (grades[i] < 7){
        badGrades.push(grades[i])
    }
}

console.log(badGrades)

//With callbacks
badGrades2 = grades.filter(grade => grade < 7)
badGrades3 = grades.filter(function (grade) {
    return grade < 7
})

const lessThan7 = grade => grade < 7
badGrades4 = grades.filter(lessThan7)

console.log(badGrades2)
console.log(badGrades3)
console.log(badGrades4)
