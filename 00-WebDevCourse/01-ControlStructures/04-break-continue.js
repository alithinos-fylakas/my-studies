const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in numbers){
    if (x == 5){
        break
    }
    console.log(`x = ${numbers[x]}`)
}

for (y in numbers){
    if (y == 5){
        continue
    }
    console.log(`y = ${numbers[y]}`)
}

extern: for (a in numbers){
    for (b in numbers){
        if (a == 2 && b == 3){
            break extern
        }
        console.log(`Pair = ${a}, ${b}`)
    }
}
//Here, exertn is a "label"

//Avoid to abuse it