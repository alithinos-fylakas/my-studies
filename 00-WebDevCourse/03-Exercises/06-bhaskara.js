function printout(input) {
    console.log(input)
}

const bhaskara = (ax2 = "ax²", bx = "bx", c = "c") => {
    
    a = Number(ax2.replace("x²", ""))
    b = Number(bx.replace("x", ""))
    c = Number(c)

    printout(a)
    printout(b)
    printout(c)

    delta = b*b - 4 * a * c

    if (delta < 0){
        printout("Delta is negative")
        return
    }

    return [ (-b + Math.sqrt(delta))/(2*a), (-b - Math.sqrt(delta))/(2*a)]
}

printout(bhaskara("3x²", "-4x", "-5"))
printout(bhaskara("1x²", "-1x", "-2"))