// Tagged templates

function tag(pieces, ...values){
    console.log(pieces)
    console.log(values)
    return "Another string"
}

const pupil = "Gui"
const state = "Approved"
console.log(tag `${pupil} is ${state}`)