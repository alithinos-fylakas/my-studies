for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log("i = ", i)

const funcs = []

for (var j = 0; j < 10; j++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()