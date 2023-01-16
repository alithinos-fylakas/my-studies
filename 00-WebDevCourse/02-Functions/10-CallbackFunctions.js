const manufacturers = ["Mercedes", "Audi", "BMW", "Ferrari", "Ford"]

function printf(name, index) {
    console.log(`${index + 1}. ${name}`)
}

manufacturers.forEach(printf)
manufacturers.forEach(function (a){
    console.log(a)
})
manufacturers.forEach(manufacturer => console.log(manufacturer))