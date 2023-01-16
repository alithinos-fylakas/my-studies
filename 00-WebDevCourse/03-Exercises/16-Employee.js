
const workPlan = (plan, currSalary) => {
    let increase = 0
    switch (plan){
        case "A":
            increase = currSalary/10
            break
        case "B":
            increase = currSalary/10 * 1.5
            break
        case "C":
            increase = currSalary/10 * 2
            break
        default:
            return console.log("The work plan isn't right")
    }
    return console.log(currSalary + increase)
}

workPlan("A", 1000)