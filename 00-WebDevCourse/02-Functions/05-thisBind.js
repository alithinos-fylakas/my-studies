function Person(){
    this.age = 0

    const self = this

    setInterval(function(){
        self.age++
        console.log(/*this.age*/self.age)
    }/*.bind(this)*/, 1000)
}

new Person