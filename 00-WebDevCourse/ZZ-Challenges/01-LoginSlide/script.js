
function slide() {
    let i
    let slides = document.getElementsByClassName("image")
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block"
    setTimeout(slide, 5000)
}

let slideIndex = 0
slide()