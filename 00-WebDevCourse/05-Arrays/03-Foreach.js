const approved = ["Agatha", "Aldo", "Daniel", "Rachel"]

approved.forEach(function(name, index, array, x){
    console.log(`${index +1}) ${name}!`)
    //console.log(array)
    //console.log(x)
})

approved.forEach(name => console.log(name))

const showApproved = approve => console.log(approve)
approved.forEach(showApproved)