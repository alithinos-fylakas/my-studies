
const range = (number) => {
    number = Number(number)
    switch (number){
        case 1:
            return console.log("one")
        case 2:
            return console.log("two")
        case 3:
            return console.log("three")
        case 4:
            return console.log("four")
        case 5:
            return console.log("five")
        case 6:
            return console.log("six")
        case 7:
            return console.log("seven")
        case 8:
            return console.log("eight")
        case 9:
            return console.log("nine")
        case 10:
            return console.log("ten")
        default:
            return console.log("Invalid number")
    }
}

range(1)
range("2")