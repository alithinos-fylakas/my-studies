//Doesn't work
/*
const waitforEach = array => {
    array.forEach( (e) => {
        setTimeout(() => {
            console.log(e)
        }, 2000)
    } )}
*/

//waitforEach(list)
/*
const forA = (array) => {
    array.forEach( (e) => {
        setTimeout( () => {
            console.log(e)
        }, 2000)
    })
}

const wait = new Promise(forA)

wait
    .then(console.log)
*/
/*
for (e of list){
    setTimeout( () => {
        console.log(e)
    }, 2000)
}
*/

/*
function waitToPrint(content, i){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(content[i])
        }, 2000)
    })
}

const printEach = async (array) => {
    array.forEach(waitToPrint).then(console.log)
}

printEach(list)
*/

/*
waitToPrint(2, list)
    .then(list => {
        list.forEach(e => console.log(e))
    })
*/
/*
function printNowAndReturn(list){
    for (e in list){
        waitToPrint(e)
            .then(console.log)
    }
}
*/
const list = [0, 1, 2, 3, 4, 5]

function waitToPrint(content, seconds){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(content)
        }, seconds * 1000)
    })
}


const each = async (list) => {
    let value = null
    for(e in list){
        value = await waitToPrint(e, 5)
        console.log(value)
    }
}

//printNowAndReturn(list)
each(list)