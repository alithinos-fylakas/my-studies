const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

axios.get(url).then(response => {
    const employees = response.data
    //console.log(employees)

    // Chinese women with the lowest salary?
    //console.log(lessSal(employees)) //My solution

    const emp = employees
        .filter(chineses)
        .filter(women)
        .filter(lowest_salary)
    
        console.log(emp)
})

//My version --> Does not work
// To use in filter
const isFemale = (e) => {
    if (e.genero === "F") return true
    return false
}

const isChinese = (e) => {
    if (e.pais === "China") return true
    return false
}

// To find the smaller salary
const lessSal = (employeesls) => {
    let emp = null
    employeesls.filter(isFemale).filter(isChinese).forEach(e => {
        if ( emp === null) {
            emp = e
        }
        if (emp.salario < e.salario){
            emp = emp
            //console.log(emp)
        } else {
            emp = e
        }
    })
    return emp
}

// Teacher's solution
const chineses = f => f.pais === "China"
const women = f => f.genero === "F"
const lowest_salary = (emp, currEmp) => {
    if (emp.salario < currEmp.salario) return emp
    return currEmp
}