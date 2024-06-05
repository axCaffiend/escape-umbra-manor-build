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




// ------------ DIALOGUE BOX ------------
/* 
  - Persistent element 
  - Shows and hides when showDialogue() called in different activity scripts
  - Takes in an array of pairs of strings [[character-name, their dialogue]...]
  - dialogue.objects are imported from <activity-name>-dialogue.js file
  - Converts the dialogue array text to html elements and adds to 
*/

const dialogueContainer = document.querySelector(".dialogue");
const dialogueBox = document.querySelector(".dialogue .dialogue-box");
const nameBox = document.querySelector(".dialogue .dialogue-box .character-name");
const nameLabel = document.querySelector(".dialogue .dialogue-box .character-name p");
const speechBox = document.querySelector(".dialogue .dialogue-box .speech");

const nextButton = document.querySelector(".dialogue .dialogue-box .dialogue-button-next");

let lineIndex = 0;

nextButton.addEventListener("click", function () {
  console.log("\n next button clicked");
  console.log("lineIndex: "+ lineIndex);
  console.log("Current dialogue length: " + speechBox.children.length)

  if (lineIndex <= (speechBox.children.length -1)) {
      lineIndex ++;
  }
})


export function showDialogue(dialogue) {
  console.log(`*** showDialogue Running: ${dialogue}***`);
  if (dialogue instanceof Array) {
      console.log("input is an array");
  } else {
      console.log("incorrect input - not an array");
  }

  lineIndex = 0;
  // Increase lineIndex every time next is pressed, until it's greater than length of array

  console.log("lineIndex: "+ lineIndex);
  console.log("dialogue.length: " + dialogue.length);

  show();

  // Convert dialogue array to [["name", <p>speech text <b>bold text</b> more text</p>] , ...]
  const dialogueFormatted = dialogue.map(formatText);
  
  dialogueFormatted.forEach((i)=>{
      speechBox.appendChild(i[1]);
  })

  updateDialogue();

  nextButton.addEventListener("click", updateDialogue);

  function formatText (dItem) {
      const bold = /\*\*/gim; //reg ex for '**'
      let name = dItem[0];
      let speech = dItem[1].split(bold);
      const speechEl = document.createElement("p");
      
      // Add text to <p> element for speech
      speech.forEach(function(text, index) {
          
          // Add b element with text content to speechEl <p>
          if (index % 2 !== 0) {

              // Create b tag
              let bText = document.createElement("b");

              bText.textContent = text;
              
              speechEl.appendChild(bText);

          // Add textNode to pLines
          } else {

              speechEl.appendChild(document.createTextNode(text));

          }
      })

      console.log("Formatting speech... " + name + speechEl);

      return [name, speechEl]

  }

  function updateDialogue () {
    console.log("*** updateDialogue running ***")

    console.log()
      if (lineIndex > (dialogueFormatted.length -1)) {
          
          let deleteSpeech = speechBox.children
          console.log(`${deleteSpeech.length} elements found to delete.`)

          // Changed to while loop. For loop did not work with live HTMLcollection - did not delete everything
          while(deleteSpeech.length > 0) {
              console.log("deleting" + deleteSpeech[0])
              deleteSpeech[0].remove();
          }

          console.log("Speechbox cleared");

          nextButton.removeEventListener("click", updateDialogue);
          hide();

      } else {
          nameLabel.textContent = dialogueFormatted[lineIndex][0];
          const currentLine = speechBox.children[lineIndex];
          currentLine.classList.add("show");
          if (lineIndex !== 0) {
              currentLine.previousElementSibling.classList.remove("show");
          }
      }
  }


  function show() {
      dialogueContainer.classList.replace("hide", "show");
  }

  function hide() {
      dialogueContainer.classList.replace("show","hide"); 
  }
  
}






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
