
function Triangle(side1 = 1, side2 = 1, side3 = 1){

    this.s1 = side1
    this.s2 = side2
    this.s3 = side3

    this.IsTriangle = () => {
        if (this.s1 + this.s2 >= this.s3 && this.s1 + this.s3 >= this.s2 && this.s2 + this.s3 >= this.s1){
            return true
        }
        return false
    }

    this.type = (side1 = this.s1, side2 = this.s2, side3 = this.s3) => {
        /*if (this.IsTriangle()){
            if (side1 != side2 && side1 != side3 && side2 != side3){
                console.log("Escaleno")
                return
            }
            if (side1 == side2 && side1 == side3 && side2 == side3){
                console.log("Equilátero")
                return
            }
            console.log("Isósceles")
            return
        }
        console.log("It's not a triangle!")
        */
        if (!this.IsTriangle()){
            console.log("It's not a triangle!")
            return
        }
        if (side1 != side2 && side1 != side3 && side2 != side3){
            console.log("Escaleno")
            return
        }
        if (side1 == side2 && side1 == side3 && side2 == side3){
            console.log("Equilátero")
            return
        }
    }
}

tri = new Triangle()
console.log(tri.IsTriangle())
tri.type()

triangle = new Triangle(5, 4, 3)
triangle.type()