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

//ES8
//Aim to simplify the use of Promises

let getStudents = async () => {
    const ca = await getClass("A")
    const cb = await getClass("B")
    const cc = await getClass("C")
    return [].concat(ca, cb, cc)
} // returns an object AsyncFunction

getStudents()
    .then(students => students.map(s => s.nome))
    .then(nomes => console.log(nomes))