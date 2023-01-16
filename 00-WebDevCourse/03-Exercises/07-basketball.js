const recordes = (points = "") => {
    let points_v = points.split(" ").map(Number)

    //console.log(points_v)

    let greater = points_v[0]
    let less = points_v[0]

    let gqtd = 0
    let lessId = 0

    for (let i = 1; i < points_v.length; i++){
        if (points_v[i] > greater){
            gqtd++
            greater = points_v[i]
            continue
        }
        if (points_v[i] <= less){
            less = points_v[i]
            lessId = i
        }
    }

    return [gqtd, lessId + 1]
}

console.log(recordes("10 20 20 8 25 3 0 30 1"))