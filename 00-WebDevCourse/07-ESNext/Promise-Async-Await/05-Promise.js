function generateRandomBetween(min, max, time){
    if (min > max){
        [max, min] = [min, max]
    }

    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            const factor = max - min + 1
            const random = parseInt(Math.random() * factor) + min
            resolve(random)
        }, time * 1000)
    })
}

function generateMultipleNumbers(){
    return Promise.all([
        generateRandomBetween(0, 10, 10),
        generateRandomBetween(0, 100, 1.5),
        generateRandomBetween(2, 69, 0.5),
        generateRandomBetween(7, 49, 2),
        generateRandomBetween(15, 70, 9),
        generateRandomBetween(4, 12, 2.8)
    ])
}

console.time("promise")

generateMultipleNumbers()
    .then(console.log)
    .then(() => {
        //console.timeLog("promise")
        console.timeEnd("promise")
    })
