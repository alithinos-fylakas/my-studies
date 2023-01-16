Array.prototype.myReduce = function(callbackfn, initialValue = false) {
    
    let accumulator = initialValue

    for (let i = 0; i < this.length; i++){
        accumulator = callbackfn(accumulator, this[i], i, this)
    }
    
    return accumulator
}

const students = [
    { name: "Diovanna", grade: 9.8, scholar: true},
    { name: "Diorno", grade: 8.9, scholar: true},
    { name: "Paul", grade: 9.1, scholar: false},
    { name: "Marina", grade: 7.6, scholar: false}
]

const isEverybodyScholar = students.map(a => a.scholar).myReduce(function(accumulator, current){
    return accumulator && current
}, false)

const isThereScholar = students.map(a => a.scholar).myReduce(function(accumulator, current){
    return accumulator || current
}, false)

console.log(isEverybodyScholar, isThereScholar)

const result = students.map( a => a.grade).myReduce(function(accumulator, current){
    console.log(accumulator, current)
    return accumulator + current
}, 10)

console.log(result)