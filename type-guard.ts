function isImageElement(elementToCheck: HTMLElement | null): elementToCheck is HTMLImageElement {
    return elementToCheck != null && "src" in elementToCheck
}

function setImageUrl() {
  const image = document.getElementById("image");
  if (isImageElement(image)){
    image.src = "image-url"
    return
  }
  console.log("This is not image.")
}
