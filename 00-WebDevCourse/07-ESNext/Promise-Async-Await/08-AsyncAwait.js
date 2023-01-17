function generateRandomBetween(min, max, forbidden){
    if (min > max) [max, min] = [min, max]

    return new Promise( (resolve, reject) => {
        const factor = max - min + 1
        const random = parseInt(Math.random() * factor) + min
        if (forbidden.includes(random)) {
            reject("Repeated number")
        } else {
            resolve(random)
        }
    })
}

async function generateMegaSena(qtt, attempts = 0){
    try {
        const numbers = []
        for(let _ of Array(qtt).fill()){
            numbers.push(await generateRandomBetween(1, 60, numbers))
        }
        return numbers
    } catch(e) {
        if (attempts < 5){
            return generateMegaSena(qtt, attempts + 1)
        }
        throw "Aaaaah boriiing"
    }
}

generateMegaSena(15)
    .then(console.log)
    .catch(console.log)

/*
generateRandomBetween(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)
*/