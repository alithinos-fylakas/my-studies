function waitToSpeak(seconds, phrase){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(phrase)
            //reject(phrase)
        }, seconds * 1000 )
    })
}

waitToSpeak(5, "Cool cool")
    .then(phrase => phrase.concat("?!?"))
    .then(otherPhrase => console.log(otherPhrase))
    .catch(e => console.log(e)) // Used to treat the error