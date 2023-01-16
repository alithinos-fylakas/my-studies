
function DealWithError(error){
    //throw new Error("...")
    //throw 10
    //throw true
    //throw "message"
    throw {
        name: error.name,
        message: error.message,
        date: new Date
    }
}

function printNameOutLoud(person) {
    try {
        console.log(person.name.toUpperCase() + "!!!")
    } catch (error) {
        DealWithError(error)
    } finally {
        console.log("Final")
    }
}

const object = { nome : "Diovanna"}
printNameOutLoud(object)