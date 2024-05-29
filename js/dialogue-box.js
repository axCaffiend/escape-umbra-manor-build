/*


Script object structure:

[
    {
        character: NAME , 
        lines: [
            "Line 1 of dialogue" , 
            "Line 2 of dialogue **bold text**" ,
            "Line 3 more speech bla bla..."
        ]
    }
]

--- SCRIPT FUNCTIONS ---

- show dialogue box while running dialogue
- hide dialogue box when dialogue finished

- parse Script object into array of html elements

- update the dialogue box to first item in parsedScript array

    - update character
    - update line of dialogue showing

- next - show next item in parsedScript



--- THINGS TO TRACK ---

- scriptItemIndex = 0
    - lineItemIndex = 0
- dialogueRunning = true/false


*/


const dialogueContainer = document.querySelector(".dialogue");
const dialogueBox = document.querySelector(".dialogue .dialogue-box");
const nameBox = document.querySelector(".dialogue .dialogue-box .character-name");
const speechBox = document.querySelector(".dialogue .dialogue-box .speech");
const nextButton = document.querySelector(".dialogue .dialogue-box .dialogue-button-next");


function showDialogue(dialogue) {
    console.log("*** showDialogue Running ***");
    console.log(dialogue);
}

nextButton.addEventListener("click", nextDialogue);

function nextDialogue() {
    nextButton.style.border = "solid 1px red";
}

export {showDialogue};