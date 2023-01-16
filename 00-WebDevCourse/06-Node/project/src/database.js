const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const products = {}

function saveProd(product) {
    if (!product.id) product.id = sequence.id
    products[product.id] = product
    return product
}

function delProd(id) {
    product = products[id]
    delete products[id]
    return product
}

function getProduct(id) {
    return products[id] || {}
}

function getProducts() {
    return Object.values(products)
}

module.exports = { saveProd, getProduct, getProducts, delProd}