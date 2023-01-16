//Closure is the scope created when a function is declared
//This scope allows a function to access and manipulate variables externs to the function

//Lexical context in action

const x = "Global"

function outside(){
    const x = "Local"
    function inside(){
        return x
    }
    return inside
}

const myFunc = outside()
console.log(myFunc())