
function snack(code, qtd){
    let price = 0
    switch (code){
        case 100:
            price = 3
            break
        case 200:
            price = 4
            break
        case 300:
            price = 5.50
            break
        case 400:
            price = 7.50
            break
        case 500:
            price = 3.50
            break
        case 600:
            price = 2.80
            break
        default:
            return "Invalid code"        
    }
    return price * qtd
}

console.log(snack(100, 5))