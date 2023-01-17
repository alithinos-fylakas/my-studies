function waitFor(time = 2000){
    return new Promise( function(resolve){
        setTimeout(() => {
            resolve()
        }, time)
    })
}

function returnValue(){
    return new Promise(resolve => {
        setTimeout( () => resolve(10), 5000)
    })
}

async function fastReturnValue(){
    return 20
} //Returns a promise

/*
waitFor()
    .then(() => console.log("Executing promise..."))
    .then(waitFor)
    .then(() => console.log("Executing promise..."))
    .then(waitFor)
    .then(() => console.log("Executing promise..."))
*/

async function execute(){

    let value = await returnValue()
    //value = await fastReturnValue()

    await waitFor(1500)
    console.log(`Async/Await ${value}...`)

    await waitFor(1500)
    console.log(`Async/Await ${value + 1}...`)

    await waitFor(1500)
    console.log(`Async/Await ${value + 2}...`)

    return value + 3
} //Because it's an async function, it returns a Promise
//So, you can use the "then" method and the "catch"

async function TrulyExecution(){
    const value = await execute()
    console.log(value)
}
/*
execute()
    .then(console.log)
*/

TrulyExecution()