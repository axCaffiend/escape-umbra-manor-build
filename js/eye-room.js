/* ----- TO DO ------

- Declare all sprites
    ** Room **
    - Door
    - Board
    - Eye
    - key flame

    **Panel**
    - Panel container (scene)
    - Brain dial
    - Labels
    - Label gaps
    - Label numbers
    - Brain display
    - Back button
    - Torch flame


- Opening cutscene animation

- SHOW DIALOGUE

- GAME LOGIC 
    ** Stage 1 **
    Explore room
    - Read all exhibits
    - Flame indicator logic
        - DarkOverlay mask
        - Glow

    - Exhibit read 
    
    ** Stage 2 **
    Drag and drop eye-panel
    - Back button
    - Drag and drop labels 
    - Display animation
    - Brain dial
*/



import * as dialogue from "./eye-room-dialogue.js";
import { showDialogue } from "./main-script.js";


function eyeRoomScript() {
    console.log("eye-room.js running");

    const eyeRoomPage = document.querySelector(".page-eye-room");
    const darkOverlay = document.querySelector(".page-eye-room .darkness-overlay");

    // Scenes/views shortcut
    const sceneRoom = ".page-eye-room .eye-room-main";
    const scenePanel = ".page-eye-room .panel-main";

    // --- Room Sprites ---
    
    // Light switch
    const lightSwitch = document.querySelector(".light-switch");
    lightSwitch.dialogue = dialogue.lightSwitchText
    
    // Room light
    const roomLightOn = document.querySelector(".room-light__on");
    const roomLightBeam = document.querySelector(".room-light__beam");

    // Key Sculpture
    const keySculpture = document.querySelector(`${sceneRoom} .key-sculpture`);
    keySculpture.glowName = "key-flame";
    keySculpture.glowSize = "90px";
    keySculpture.dialogue = dialogue.keyStatue;

    const keySculptureFlame = document.querySelector(`${sceneRoom} .key-sculpture .flame`);

    // --- Exhibits ---
    
    // Retina
    const roomRetina = document.querySelector(`${sceneRoom} .retina`);
    roomRetina.plaque = document.querySelector(`${sceneRoom} .retina .plaque-text`);
    roomRetina.glowName = "retina";
    roomRetina.glowSize = "45px";
    roomRetina.dialogue = dialogue.retina;
    roomRetina.hasRead = false;
    
    // Iris
    const roomIris = document.querySelector(`${sceneRoom} .iris`);
    roomIris.plaque = document.querySelector(`${sceneRoom} .iris .plaque-text`);
    roomIris.glowName = "iris";
    roomIris.glowSize = "100px";
    roomIris.dialogue = dialogue.iris;
    roomIris.hasRead = false;

    // Lens
    const roomLens = document.querySelector(`${sceneRoom} .lens`);
    roomLens.plaque = document.querySelector(`${sceneRoom} .lens .plaque-text`);
    roomLens.glowName = "lens";
    roomLens.glowSize = "50px";
    roomLens.dialogue = dialogue.lens;
    roomLens.hasRead = false;
    
    // Brain
    const roomBrain = document.querySelector(`${sceneRoom} .brain`);
    roomBrain.plaque = document.querySelector(`${sceneRoom} .brain .brain-plaque .plaque-text`);
    roomBrain.glowName = "brain";
    roomBrain.glowSize = "120px";
    roomBrain.dialogue = dialogue.brain;
    roomBrain.hasRead = false;


    // --- Page state --- 
    // Track events for activity
    const pageState = {
        
        "scene": "room",
        "exhibitsRead": 0,
        // "exhibitsComplete": false,
        "exhibits": [
            roomBrain,
            roomIris,
            roomLens,
            roomRetina
        ]
    }


    // pageState.exhibitsComplete = true;

    
    // ----- MAIN SCRIPT -----


    //Add Dark overlay
    eyeRoomPage.addEventListener("pointermove", updateTorchLight);

    eyeRoomPage.addEventListener("pointerdown", updateTorchLight);


    // Add all click handlers to exhibits
    pageState.exhibits.forEach(function(i) {
        i.addEventListener("click", function () {
            exhibitHandler(this);
        })
    })

    // Add click handlers to room sprites

    // Key sculpture - dialogue
    keySculpture.addEventListener("click", ()=> {
        showDialogue(keySculpture.dialogue.defaultText)
    })

    // Lightswitch
    lightSwitch.addEventListener("click", updateLightSwitch);

    // Update pageState exhibitsRead counter - to update key flame.
    function updateKeyFlame () {
        
        console.log("--- updateKeyFlame running ---");
        console.log("current value ExhibitsRead: " + pageState.exhibitsRead);
        if (pageState.exhibitsRead > 0) {
            const flamePercent = (1-(pageState.exhibitsRead / 4)) * 100;
            keySculptureFlame.style.clipPath = `inset(${flamePercent}% 0 0 0)`;
            darkOverlay.style.setProperty(`--${keySculpture.glowName}-size`, keySculpture.glowSize);
        }

    }


    // INTRO DIALOGUE

    // showDialogue(dialogue.introDialogue.defaultText);


    // ------ FUNCTIONS -------
    function exhibitHandler (exhibit) {
        console.log(`*** exhibitHandler running for '${exhibit.classList}'***`);

        exhibit.hasRead = exhibit.plaque.classList.contains("show");

        // show exhibit.dialogue.description

        showDialogue(exhibit.dialogue.defaultText);

        if(exhibit.hasRead === false) {
            activatePlaque(exhibit);
            pageState.exhibitsRead++;
            updateKeyFlame();
        }


        function activatePlaque (exhibit) {
            console.log("*** activatePlaque running ***");
    
            exhibit.plaque.classList.add("show");
            setTimeout(()=> {
                // Add glow by setting background gradient properties for each object, on darkness overlay.
                darkOverlay.style.setProperty(`--${exhibit.glowName}-size`, exhibit.glowSize);
            }, 1000);
        }
    }


 

    // --- Dark Overlay and torch effect ---
    
    function updateTorchLight (event) {

        // Get pointer position
        let xPos = event.clientX;
        let yPos = event.clientY;

        // Removes X offset when window is wider than game  screen
        if (document.documentElement.clientWidth > 1024) {
            xPos = event.clientX - ((document.documentElement.clientWidth - 1024) / 2);
        }

        // Set radial gradient position via custom properties
        darkOverlay.style.setProperty("--XPos", xPos + "px");
        darkOverlay.style.setProperty("--YPos", yPos + "px");

    }

    function removeDarkOverlay() {

        darkOverlay.classList.add("hide");
        roomLightOn.classList.add("show");
        roomLightBeam.classList.add("show");

        eyeRoomPage.removeEventListener("pointermove", updateTorchLight);
        eyeRoomPage.removeEventListener("pointerdown", updateTorchLight);
        pageState.lightOn = true;

    }



    // Light switch on/off animation

    function updateLightSwitch (e) {

        if (lightSwitch.classList.contains("off") == true) {
            console.log("updateLightSwitch - ON");
            lightSwitch.classList.replace("off", "on");
            // If all exhibits have been clicked - enables switch to turn light on
            if (pageState.exhibitsRead >= 4) {
                removeDarkOverlay();
            }
        } else if (lightSwitch.classList.contains("on") == true) {
            console.log("updateLightSwitch - OFF");
            lightSwitch.classList.replace("on", "off");
        }

        
    }

}

export {eyeRoomScript};