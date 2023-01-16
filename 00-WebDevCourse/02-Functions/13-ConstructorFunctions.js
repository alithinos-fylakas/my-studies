function Car (maxspeed = 220, delta = 5){
    //private attribute
    let currentspd = 0

    //public method
    this.accelerate = function () {
        if (currentspd + delta <= maxspeed){
            currentspd += delta
        } else {
            currentspd = maxspeed
        }
    }

    //public method
    this.getCurrentSpeed = function () {
        return currentspd
    }
}

const doblo = new Car
doblo.accelerate()
console.log(doblo.getCurrentSpeed())

const ferrari = new Car(350, 25)
ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()
console.log(ferrari.getCurrentSpeed())

console.log(typeof Car)
console.log(typeof ferrari)