
const WhatKindOfDay = (day) => {
    if ( day > 7 ){
        while (day > 7){
            day -= 7
        }
    }
    switch (day) {
        case 1 || 7:
            return "weekend"
        case 2 :
            return "business day"
        case 3:
            return "business day"
        case 4:
            return "business day"
        case 5:
            return "business day"
        case 6:
            return "business day"
        case 7:
            return "weekend"
        default:
            return "dia inválido"
    }
}

console.log(WhatKindOfDay(1))
console.log(WhatKindOfDay(5))
console.log(WhatKindOfDay(20))
console.log(WhatKindOfDay(30))
console.log(WhatKindOfDay(31))
console.log(WhatKindOfDay(365))