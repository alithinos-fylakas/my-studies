/*
function maybe(value, chanceError){
    return new Promise( (resolve, reject) => {
        if (Math.random() < chanceError){
            reject("Ocurred an error")
        } else {
            resolve(value)
        }
    })
}
*/

function maybe(value, chanceError){
    return new Promise( (resolve, reject) => {
        try{
            con.log("tmp")
            if (Math.random() < chanceError){
                reject("Ocurred an error")
            } else {
                resolve(value)
            }
        } catch(e){
            reject(e)
        }
    })
}

maybe("Testing", 0.5)
    .then(value => console.log(`Value: ${value}`))
    .then(
        console.log,
        //err => console.log(`An especified error: ${err}.`)
        )
    .then( () => console.log("Almost end!"))
    .catch(err => console.log(`General error: ${err}.`))
    .then( () => console.log("End!"))