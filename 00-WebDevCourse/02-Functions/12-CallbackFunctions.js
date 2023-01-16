//Callback on browser

document.getElementsByTagName("body")[0].onclick = function (event) {
    console.log("The event happened")
}

document.getElementsByTagName("body")[0].onclick = event => console.log("Something happened")