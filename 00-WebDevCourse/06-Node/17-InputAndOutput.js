const anonymous = process.argv.indexOf("-a") !== -1
console.log(anonymous)

if (anonymous) {
    process.stdout.write("Hey, anonymoooooous!\n")
    process.exit()
} else {
    process.stdout.write("Tell me your name, please.\n")
    process.stdin.on("data", data => {
        const name = data.toString().replace("\n", "") //Comes with the "enter" on it

        process.stdout.write(`Hi, ${name}!\n`)
        process.exit()
    })
}