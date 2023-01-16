
for (let i = 0; i < 10; i++){
    console.log(i)
}

//console.log("i = ", i) ==> Gives an error because of the escope of let

const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

console.log()

funcs[2]()
funcs[8]()
funcs[4]()