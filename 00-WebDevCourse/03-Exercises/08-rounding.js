
const nextMultFive = (grade) => {
    next = Number((grade / 5).toFixed(0))
    next = 5 * (next + 1)
    return next
}

const rounding = (grade) => {
    if (grade < 40){
        if (grade - 40 > -4 && 40 - grade < 4) {
            grade = nextMultFive(grade)
            return grade
        }
        console.log("Disapproved")
        return grade
    }
    if (!(grade%5)){
        return grade
    }
    grade = nextMultFive(grade)
    return grade
}

console.log(rounding(0))