console.log(typeof console)

const object = {}
object.name = "Cool Kid"
console.log(object.name)

function OBJ(name) {
    this.name = name
    this.exec = function() {
        console.log("Exec...")
    }
}

const other_object = new OBJ("things")
const another_other_object = new OBJ("Stranger things")

console.log(other_object.name)
console.log(another_other_object.name)