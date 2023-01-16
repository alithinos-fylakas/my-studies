function Class(name, videoID){
    this.name = name
    this.videoID = videoID
}

const class1 = new Class("Welcome", 123)
const class2 = new Class("See you soon", 456)
console.log(class1, class2)

//Simulating new
function newer(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const class3 = newer(Class, "Welcome", 123)
const class4 = newer(Class, "See you soon", 456)
console.log(class3, class4)