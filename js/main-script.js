// ---- TO DO -----

// - work out page transition

// =========================================

import {titleAnimation} from "./title-screen.js";
import { eyeRoomScript } from "./eye-room.js";



// CURRENT WORKING PAGE
transition(".page-eye-room", "fade");


// ------------ PAUSE ACTIVITY MENU -------------

// Only visible in activities 
// Options: Resume, Restart, Return to main menu. 

const pauseMenu = document.querySelector(".pause-menu");
const pauseMenuButton = document.querySelector(".pause-menu-button");
const pauseMenuOptions = document.querySelector(".pause-menu-options");
const pauseResume = document.querySelector(".pause-menu-options .resume");
const pauseRestart = document.querySelector(".pause-menu-options .restart");
const pauseReturn = document.querySelector(".pause-menu-options .return");
const pauseOverlay = document.querySelector(".pause-overlay");

// Show on page

function showPauseMenu() {
  pauseMenu.classList.replace("hide","show");
}

// Hide on page
function hidePauseMenu() {
  pauseMenu.classList.replace("show","hide");
}

// Pause Menu Button
pauseMenuButton.addEventListener("click", (e)=> {
  if (pauseMenuOptions.classList.contains("closed") == true) {
    // Opens menu
  pauseMenuOptions.classList.remove("closed");
  pauseOverlay.classList.replace("hide", "show");
  } else {
    // Closes menu
    pauseMenuOptions.classList.add("closed");
    pauseOverlay.classList.replace("show", "hide");
  }
})

// Resume
pauseResume.addEventListener("click", () => {
  pauseMenuOptions.classList.add("closed");
  pauseOverlay.classList.replace("show", "hide");
})

// Return
pauseReturn.addEventListener("click", (e) => {
  pauseMenuOptions.classList.add("closed");
  setTimeout(1);
  transition(".page-menu", "fade");
  pauseOverlay.classList.replace("show", "hide");
  hidePauseMenu();
})





// --------------------------- Intro Page -------------------------------------

const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function (event) {
  titleAnimation();
  setTimeout(()=>{transition(".page-menu", "fade")}, 11000);
});

// --------------------------- Menu Page -------------------------------------

const menuButton1 = document.querySelector(".menu1-button");
menuButton1.addEventListener("click", function () {
  transition(".page-dungeon", "fade");
  showPauseMenu();
});

const menuButton2 = document.querySelector(".menu2-button");
menuButton2.addEventListener("click", function () {
  transition(".page-eye-room", "fade");
  showPauseMenu();
});

const menuButton3 = document.querySelector(".menu3-button");
menuButton3.addEventListener("click", function () {
  transition(".page-mirror-hall", "push-left");
});








// ---------------------- 02 Eye Room --------------------------------

eyeRoomScript();














// --------------------------- Other Pages -------------------------------------



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
