function generateRandomBetween(min, max){
    if (min > max){
        [max, min] = [min, max]
    }

    return new Promise( (resolve, reject) => {
        const factor = max - min + 1
        const random = parseInt(Math.random() * factor) + min
        resolve(random)
    })
}

generateRandomBetween(10, 30)
    .then(n => n * 25)
    .then(nX25 => `The new number is: ${nX25}!`)
    .then(console.log)