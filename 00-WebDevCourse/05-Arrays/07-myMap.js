Array.prototype.mymap = function(callback){
    const returnArray = []
    for (let i = 0; i < this.length; i++){
        returnArray.push(callback(this[i], i, this))
    }
    return returnArray
}

const cart = [
    '{ "name" : "Eraser", "price" : "3.45" }',
    '{ "name" : "Notebook", "price" : "13.98" }',
    '{ "name" : "Pencil case", "price" : "41.27" }',
    '{ "name" : "Pen", "price" : "7.50" }'
]

const pickupPrice = (e = "") => JSON.parse(e)

const result = cart.mymap(pickupPrice).mymap((e) => {
    console.log(e.price)
})