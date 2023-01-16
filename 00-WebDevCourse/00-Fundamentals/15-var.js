{
    {
        {
            {
                var sera = "Será???"
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function test() {
    var local = 123
    console.log(local)
}

test()
console.log(local)

var number = 1
{
    var number = 2
    console.log("dentro = ", number)
}
console.log("fora = ", number)