const cart = [
    '{ "name" : "Eraser", "price" : "3.45" }',
    '{ "name" : "Notebook", "price" : "13.98" }',
    '{ "name" : "Pencil case", "price" : "41.27" }',
    '{ "name" : "Pen", "price" : "7.50" }'
]

const pickupPrice = (e = "") => JSON.parse(e)

const result = cart.map(pickupPrice).map((e) => {
    console.log(e.price)
})