
// Select some elements...
// change the header to left

let header = document.querySelector ("#page-header")
header.style.textAlign = "left"

//change the dog images

let dogImages = document.querySelectorAll (".dog-image")
for (let i=0; i < dogImages.length; i++) {
 dogImages[i].style.borderRadius = "25pt"
}

let dogNames = document.querySelectorAll ('.dog-name')
for (let i=0; i < dogNames.length; i++){
dogNames[i].style.textAlign = "left"
dogNames[i].style.backgroundColor = "blue"
}


let footer = document.querySelector (".footer")
footer.style.color = "red"
footer.style.borderStyle = "solid"
