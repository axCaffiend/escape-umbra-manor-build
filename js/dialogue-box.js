/*
============ NOTES ================

--- DIALOGUE OBJECT STRUCTURE ---

{
    
    // name - for naming dialogue object

    name: "name of dialogue", 
    
    // default - for dialogue / on first interaction

    "default" : [
        [
            "Character Name" , 
            "Dialogue sentence 01 **some bold text**."
         ] ,

        [
            " " , 
            "Another sentence 02 **more bold text**"
        ] ,
        ["Different Name" , "Sentence 03 of dialogue."] ,
        ...
    ] ,

    // Dialogue for other states,depending on tasks completed etc.

    "new-section" : [
        ["Character Name", "dialogue..."],
        [" ", "more dialogue....."]
    ]
}

--- SCRIPT FUNCTIONS ---

- show dialogue box while running dialogue
- hide dialogue box when dialogue finished

- Takes in text from an array of [character, speech] pairs



--- THINGS TO TRACK ---

- scriptItemIndex = 0
    - lineItemIndex = 0
- dialogueRunning = true/false

============= NOTES END ================
*/





export function showDialogue(dialogue) {
    console.log(`*** showDialogue Running: ${dialogue}***`);
    if (dialogue instanceof Array) {
        console.log("input is an array");
    } else {
        console.log("incorrect input - not an array");
    }

    const dialogueContainer = document.querySelector(".dialogue");
    const dialogueBox = document.querySelector(".dialogue .dialogue-box");
    const nameBox = document.querySelector(".dialogue .dialogue-box .character-name");
    const nameLabel = document.querySelector(".dialogue .dialogue-box .character-name p");
    const speechBox = document.querySelector(".dialogue .dialogue-box .speech");
    const speechText = document.querySelector(".dialogue .dialogue-box .speech p");
    const nextButton = document.querySelector(".dialogue .dialogue-box .dialogue-button-next");

    let lineIndex = 0;
    // Increase lineIndex every time next is pressed, until it's greater than length of array

    console.log("lineIndex: "+ lineIndex);
    console.log("dialogue.length: " + dialogue.length);

    show();
    nameLabel.textContent = dialogue[lineIndex][0];
    speechText.textContent = dialogue[lineIndex][1];

    nextButton.addEventListener("click", function () {
        console.log("\n next button clicked");
        console.log("lineIndex: "+ lineIndex);
        console.log("dialogue.length: " + dialogue.length);

        if (lineIndex <= (dialogue.length -1)) {
            lineIndex ++;
        }
    })
    
    nextButton.addEventListener("click", updateDialogue);



    function updateDialogue () {
        if (lineIndex > (dialogue.length -1)) {
            nextButton.removeEventListener("click", updateDialogue);
            hide();
        } else {
            nameLabel.textContent = dialogue[lineIndex][0];
            speechText.textContent = dialogue[lineIndex][1];
        }
    }


    function show() {
        dialogueContainer.classList.replace("hide", "show");
    }

    function hide() {
        dialogueContainer.classList.replace("show","hide"); 
    }
    
}
