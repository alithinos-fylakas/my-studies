const students = [
    { name: "Diovanna", grade: 9.8, scholar: true},
    { name: "Diorno", grade: 8.9, scholar: true},
    { name: "Paul", grade: 9.1, scholar: false},
    { name: "Marina", grade: 7.6, scholar: false}
]

const isEverybodyScholar = students.map(a => a.scholar).reduce(function(accumulator, current){
    return accumulator && current
}, false)

const isThereScholar = students.map(a => a.scholar).reduce(function(accumulator, current){
    return accumulator || current
}, false)

console.log(isEverybodyScholar, isThereScholar)