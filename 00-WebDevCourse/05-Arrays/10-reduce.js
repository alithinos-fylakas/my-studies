const students = [
    { name: "Diovanna", grade: 9.8, scholar: true},
    { name: "Diorno", grade: 8.9, scholar: true},
    { name: "Paul", grade: 9.1, scholar: false},
    { name: "Marina", grade: 7.6, scholar: false}
]

const result = students.map( a => a.grade).reduce(function(accumulator, current){
    console.log(accumulator, current)
    return accumulator + current
}, 10)

console.log(result)