// ---- TO DO -----

// - work out page transition

// =========================================

// CURRENT WORKING PAGE
transition(".page-eye-room", "fade");

// const testFlameButton = document.querySelector(".test-flame");
const flameBar = document.querySelector(".key-sculpture .flame");

// testFlameButton.addEventListener("click", (e) => {
//   flameBar.classList.add("flame-01")
// })





// --------------------------- Intro Page -------------------------------------
import {titleAnimation} from "./title-screen.js";

const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function (event) {
  titleAnimation();
  setTimeout(()=>{transition(".page-menu", "fade")}, 11000);
});

// --------------------------- Menu Page -------------------------------------

const menuButton1 = document.querySelector(".menu1-button");
menuButton1.addEventListener("click", function () {
  transition(".page-yourPageID1", "fade");
});

const menuButton2 = document.querySelector(".menu2-button");
menuButton2.addEventListener("click", function () {
  transition(".page-eye-room", "push-left");
});

const menuButton3 = document.querySelector(".menu3-button");
menuButton3.addEventListener("click", function () {
  transition(".page-yourPageID3", "push-left");
});

// --------------------------- Other Pages -------------------------------------

const page1Button = document.querySelector(".p1-button");
page1Button.addEventListener("click", function () {
  transition(".page-yourPageID2", "push-left");
});

const page1MenuButton = document.querySelector(".p1-menu-button");
page1MenuButton.addEventListener("click", function () {
  transition(".page-menu", "fade");
});


const page2MenuButton = document.querySelector(".p2-menu-button");
page2MenuButton.addEventListener("click", function () {
  transition(".page-menu", "fade");
});

const page3MenuButton = document.querySelector(".p3-menu-button");
page3MenuButton.addEventListener("click", function () {
  transition(".page-menu", "fade");
});

// --------------------------- Transition Pages -------------------------------------

/* use by:  transition(".page-menu","fade");

   pass in id of page to show next.  Type can be either "push-left", "push-right"
   or "fade" depending on the type of animation you want to happen.
   Classes are added to incoming and outgoing page that adds a CSS animation
   which moves them into position.  Listener is added for when animation
   is over to tidy up and remove the "current" class from the old page
    */

function transition(destinationPage, type) {
  const toPage = document.querySelector(destinationPage);
  const fromPage = document.querySelector(".pages .current"); // store the page that is currently showing
  toPage.classList.add("current", "in", `${type}`);

  // this is called when the page transition ends
  const animationCallback = (e) => {
    fromPage.classList.remove("current", "out", `${type}`);
    e.target.classList.remove(`${type}`, "in");
    e.target.removeEventListener("animationend", animationCallback);
  };
  toPage.addEventListener("animationend", animationCallback);

  fromPage.classList.add("out", `${type}`);
}
