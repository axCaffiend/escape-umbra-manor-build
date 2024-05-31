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

- parse Script object into array of html elements

- update the dialogue box to first item in parsedScript array

    - update character
    - update line of dialogue showing

- next - show next item in parsedScript



--- THINGS TO TRACK ---

- scriptItemIndex = 0
    - lineItemIndex = 0
- dialogueRunning = true/false

============= NOTES END ================
*/





export function showDialogue(dialogue) {
    console.log(`*** showDialogue Running: ${dialogue.name}***`);

    const dialogueContainer = document.querySelector(".dialogue");
    const dialogueBox = document.querySelector(".dialogue .dialogue-box");
    const nameBox = document.querySelector(".dialogue .dialogue-box .character-name");
    const speechBox = document.querySelector(".dialogue .dialogue-box .speech");
    const nextButton = document.querySelector(".dialogue .dialogue-box .dialogue-button-next");

    nextButton.addEventListener("click", nextDialogue);

    show();


    // Animate in
    function show() {
        dialogueContainer.classList.replace("hide", "show");
    }

    function hide() {
        dialogueContainer.classList.replace("show","hide"); 
    }
    

    function nextDialogue() {
        nextButton.style.border = "solid 1px red";
    }

    
}
