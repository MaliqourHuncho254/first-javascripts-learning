document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.jpeg") {
    myImage.setAttribute("src", "images/firefox2.jpeg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.jpeg");
  }
}