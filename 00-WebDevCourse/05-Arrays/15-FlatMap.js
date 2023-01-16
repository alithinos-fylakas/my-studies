const school = [{
    name: "Class C1",
    students: [{
        name: "Gus",
        grade: 8.3
    }, {
        name: "Ana",
        grade: 9.3
    }]
}, {
    name: "Class C2",
    students: [{
        name: "Rebeca",
        grade: 8.8
    }, {
        name: "Auror",
        grade: 9.7
    }]
}]

const getGradeStudent = student => student.grade
const getGradeClass = classs => classs.students.map(getGradeStudent)

const grades1 = school.map(getGradeClass)
console.log(grades1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const grades2 = school.flatMap(getGradeClass)
console.log(grades2)