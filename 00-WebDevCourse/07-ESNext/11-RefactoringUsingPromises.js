const http = require("http")

const getClass = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    return new Promise( (resolve, reject) => {
        http.get(url, res => {
            let result = ""
    
            res.on("data", data => {
                result += data
            })
    
            res.on("end", () => {
                try {
                    resolve(JSON.parse(result))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}
/*
let names = []
getClass("A").then(students => {
    names = names.concat(students.map(a => `A: ${a.nome}`))
    getClass("B").then(students => {
        names = names.concat(students.map(a => `B: ${a.nome}`))
        getClass("C").then(students => {
            names = names.concat(students.map(a => `C: ${a.nome}`))
            console.log(names)
        })
    })
})
*/

Promise.all([getClass("A"), getClass("B"), getClass("C")])
    .then(classes => [].concat(...classes))
    .then(students => students.map(student => student.nome))
    .then(names => console.log(names))
    .catch(e => console.log(e.message))

getClass("D").catch(e => console.log(e.message))