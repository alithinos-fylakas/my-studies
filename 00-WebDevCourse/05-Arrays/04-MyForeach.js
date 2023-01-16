
const foreach = (array = [], func = (element = null, index = null, array = null) => { console.log(element, index, array) }) => {
    for (let index = 0; index < array.length; index++){
        func(array[index], index, array)
    }
}

sample = ["a", "b", "c", "d"]

foreach(sample)

foreach(sample, function(element) {
    console.log(element)
})

Array.prototype.myforEach = function(callback){
    for (let index = 0; index < this.length; index++){
        callback(this[index], index, this)
    }
}

sample.myforEach(function(element, index) {
    console.log(element, index)
})