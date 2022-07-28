
// Select some elements...
// change the header to left

let header = document.querySelector ("#page-header")
header.style.textAlign = "left"

//change the dog images

let dogImages = document.querySelectorAll (".dog-image")
for (let i=0; i < dogImages.length; i++) {
 dogImages[i].style.borderRadius = "25pt"
}

