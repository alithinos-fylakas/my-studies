
function eachFruit( string = " " ) {
    switch (string){
        case "apple":
            console.log("We don't sell this fruit here...")
            break
        case "kiwi":
            console.log("We are short of kiwi...")
            break
        case "watermelon":
            console.log("Here it is: that's 3 a kilo.")
            break
        default:
            console.log("What have you tried to say?")
    }
}

eachFruit("apple")
eachFruit("kiwi")
eachFruit("watermelon")
eachFruit("hey")