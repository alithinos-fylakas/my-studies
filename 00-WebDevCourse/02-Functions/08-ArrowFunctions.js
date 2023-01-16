let compareWithThis = function (parameter){
    console.log(parameter === this)
}

compareWithThis(global)

const obj = {}
compareWithThis = compareWithThis.bind(obj)

compareWithThis(global)
compareWithThis(obj)

let compareWithThisArrow = parameter => console.log(this === parameter)
compareWithThisArrow(global)
compareWithThisArrow(module.exports)
compareWithThisArrow(this)

compareWithThisArrow = compareWithThisArrow.bind(this)
compareWithThisArrow(obj)
compareWithThisArrow(module.exports)