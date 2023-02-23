
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function animate(gameState, callback) {
    if (!gameState){
        clearTimeout(animate)
    }
    let i
    const frames = callback()

    for (i = 0; i < frames.length; i++){
        frames[i].style.display = "none"
    }
    frameIndex++
    if (frameIndex > frames.length) { frameIndex = 1 }
    frames[frameIndex - 1].style.display = "block"
    setTimeout(animate, MSPF, gameState, callback)
}

function statePlayer() {
    const player = document.getElementsByClassName("player")[0]
    const state = player.classList[1]

    if (lastState != state){
        hide(lastState)
        lastState = state
    }

    switch (state) {
        case "trunning":
            hide("tjumping")
            hide("tfalling")
            hide("tdead")
            hide("tdying")
            player.children[0].style.display = "block"
            return running
        case "tjumping":
            if (counter <= 300) {
                counter += 84
                player.children[1].style.display = "block"
                hide("trunning")
                hide("tfalling")
                MSPF = 125
                return jumping
            } else if (counter > 300 && counter <= 1000){
                counter += 84
                player.children[2].style.display = "block"
                hide("tjumping")
                MSPF = 42
                return falling
            } else {
                player.classList.add("trunning")
                player.classList.remove("tjumping")
                counter = 0
                MSPF = 84
                return running
            }
        case "tdying":
            hide("trunning")
            hide("tjumping")
            hide("tfalling")

            if (counter >= 1000) {
                hide("tdying")
                player.classList.remove("tdying")
                player.classList.add("tdead")
                player.children[4].style.display = "block"
                counter = 0
                MSPF = 1000
                return dead
            }
            hide("tdead")
            player.classList.remove("trunning")
            player.classList.remove("tjumping")
            player.children[3].style.display = "block"
            counter += 143
            MSPF = 143

            return dying
        case "tdead":
            hide("tdying")
            player.children[4].style.display = "block"
            return dead
    }
}

function hide(last) {
    const states = player.children
    switch (last) {
        case "trunning":
            states[0].style.display = "none"
            break
        case "tjumping":
            states[1].style.display = "none"
            break
        case "tfalling":
            states[2].style.display = "none"
            break
        case "tdying":
            states[3].style.display = "none"
            break
        case "tdead":
            states[4].style.display = "none"
            break
    }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const playerPosition = Number( window.getComputedStyle(player).bottom.replace("px", "") )

    if (pipePosition > 0 && pipePosition <= 108 && playerPosition + 4 <= 96) {
        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px`

        player.style.animation = "none"
        player.style.bottom = `${playerPosition}px`

        player.className = "player tdying"
        gameState = false

        clearInterval(loop)
    }
}, 10)

function cloud(){
    const cloud = document.createElement("div")
    cloud.classList.add("cloud")

    width = getRndInteger(128, 256)
    height = getRndInteger(64, 128)
    duration = getRndInteger(10, 20)

    cloud.style.width = `${width}px`
    cloud.style.height = `${height}px`
    cloud.style.animationDuration = `${duration}s`

    game_board.append(cloud)
}

const running = document.getElementsByClassName("run")
const jumping = document.getElementsByClassName("jump")
const falling = document.getElementsByClassName("fall")
const dying = document.getElementsByClassName("die")
const dead = document.getElementsByClassName("dead")

let frameIndex = 0
let lastState = "trunning"
let counter = 0
let MSPF = 84
let gameState = true

const player = document.querySelector(".player")
const pipe = document.querySelector(".pipe")
const game_board = document.querySelector(".game_board")

window.addEventListener("keydown", (a) => {
    if (a.code === "Space" && player.className === "player trunning") {
        player.className = "player tjumping"
    }
})

for (let i = 0; i < 4; i++){
    cloud()
}

document.querySelectorAll(".cloud").forEach((c)=>{
    c.style.top = `${getRndInteger(0, 160)}px`
})

animate(gameState, statePlayer)