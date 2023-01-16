const value = "Global"

function myFunc(){
    console.log(value)
}

function exec(){
    const value = "local"
    myFunc()
}

exec()