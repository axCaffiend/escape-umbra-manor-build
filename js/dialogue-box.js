/*
============ NOTES ================

TO DO: @Line 138

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
    
    const nextButton = document.querySelector(".dialogue .dialogue-box .dialogue-button-next");

    let lineIndex = 0;
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

    nextButton.addEventListener("click", function () {
        console.log("\n next button clicked");
        console.log("lineIndex: "+ lineIndex);
        console.log("dialogue.length: " + dialogue.length);

        if (lineIndex <= (dialogue.length -1)) {
            lineIndex ++;
        }
    })

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

    // UPDATE TO WORK IF CLICKED MULTIPLE TIMES - REMOVE SHOW AT END

    function updateDialogue () {
        if (lineIndex > (dialogueFormatted.length -1)) {
            
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
