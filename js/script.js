const imagesList = ["./img/img-1.jpg", "./img/img-2.jpg", "./img/img-3.jpg"];
const images = [];
// Load  images on page-load
function preloader() {
  for (let i = 0; i < imagesList.length; i++) {
    images[i] = new Image();
    images[i].src = imagesList[i];
  }

  // Images ready to be used:
  console.log(
    `Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`
  );
  //first content from the resource-object start

  document.getElementById("content-area").innerHTML =
    '<div class="col-1"><img src="' +
    content[0]["imgUrl"] +
    '" alt=" ' +
    content[0]["imgAlt"] +
    '" ></div><div class="col-2"><h2>' +
    content[0]["headingContent"] +
    "</h2><p>" +
    content[0]["bodyText"] +
    "</p></div>";
  //first content from the resource-object end
}
window.addEventListener("load", preloader);
// buttons and register click event start
var buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    handleSelection();
  });
});
// buttons and register click event end
//  resource-object start
const content = [
  {
    headingContent: "Transmission",
    bodyText:
      "A transmission tower, also known as an electricity pylon or simply a pylon in British English and as a hydro tower in Canadian English, is a tall structure, usually a steel lattice tower, used to support an overhead power line.",
    imgUrl: imagesList[0],
    imgAlt: "image1",
  },
  {
    headingContent: "Cable",
    bodyText:
      "The tensioning of the load-bearing cables permits the adjustment of the profile along the line. This tension attains 260 tonnes for the 75mm cables and 112 tonnes for the 42mm cables. These cables are solidly anchored in the abutments constructed at the rear of the stations. The tension of the puller cable is obtained by the counterweight of G2 Station and each of them weighs 36 tonnes, which induces a tension of 18 tonnes for each strand of cable.",
    imgUrl: imagesList[1],
    imgAlt: "image2",
  },
  {
    headingContent: "Solar",
    bodyText:
      "Solar power is energy from the sun that is converted into thermal or electrical energy. Solar energy is the cleanest and most abundant renewable energy source available, and the U.S. has some of the richest solar resources in the world. Solar technologies can harness this energy for a variety of uses, including generating electricity, providing light or a comfortable interior environment, and heating water for domestic, commercial, or industrial use.",
    imgUrl: imagesList[2],
    imgAlt: "image3",
  },
];
//  resource-object end

// start handleSelection function here. */
function handleSelection() {
  var clickbutton = event.target.value - 1;
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    if (button.hasAttribute("id")) {
      button.removeAttribute("id");
    }
  }
  buttons[clickbutton].setAttribute("id", "active-button");
  document.getElementById("content-area").innerHTML =
    '<div class="col-1"><img src="' +
    content[clickbutton]["imgUrl"] +
    '" alt=" ' +
    content[clickbutton]["imgAlt"] +
    '" ></div><div class="col-2"><h2>' +
    content[clickbutton]["headingContent"] +
    "</h2><p>" +
    content[clickbutton]["bodyText"] +
    "</p></div>";
}
// End handleSelection function here. */
