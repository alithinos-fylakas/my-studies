class Launch {
    constructor(name = "Generic", value = 0){
        this.name = name
        this.value = value
    }
}

class FinancialCicles {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.launches = []
    }

    addLaunches(...launches) {
        launches.forEach(l => this.launches.push(l))
    }

    sumary() {
        let consolidatedValue = 0
        this.launches.forEach(l => {
            consolidatedValue += l.value
        })
        return consolidatedValue
    }
}

const salary = new Launch("salary", 45000)
const electricityBill = new Launch("electricity", -220)

const bill = new FinancialCicles(6, 2018)
bill.addLaunches(salary, electricityBill)
console.log(bill.sumary())