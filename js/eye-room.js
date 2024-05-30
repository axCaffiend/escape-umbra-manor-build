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
import { showDialogue } from "./dialogue-box.js";


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
    
    // Room light
    const roomLightOn = document.querySelector(".room-light__on");
    const roomLightBeam = document.querySelector(".room-light__beam");

    // Key Sculpture
    const keySculpture = document.querySelector(`${sceneRoom} .key-sculpture`);
    const keySculptureFlame = document.querySelector(`${sceneRoom} .key-sculpture .flame`);

    // --- Exhibits ---
    
    // Retina
    const roomRetina = document.querySelector(`${sceneRoom} .retina`);
    roomRetina.plaque = document.querySelector(`${sceneRoom} .retina .plaque-text`);
    roomRetina.glowName = "retina";
    roomRetina.glowSize = "45px";
    
    // Iris
    const roomIris = document.querySelector(`${sceneRoom} .iris`);
    roomIris.plaque = document.querySelector(`${sceneRoom} .iris .plaque-text`);
    roomIris.glowName = "iris";
    roomIris.glowSize = "100px";

    // Lens
    const roomLens = document.querySelector(`${sceneRoom} .lens`);
    roomLens.plaque = document.querySelector(`${sceneRoom} .lens .plaque-text`);
    roomLens.glowName = "lens";
    roomLens.glowSize = "50px";
    
    // Brain
    const roomBrain = document.querySelector(`${sceneRoom} .brain`);
    roomBrain.plaque = document.querySelector(`${sceneRoom} .brain .brain-plaque .plaque-text`);
    roomBrain.glowName = "brain";
    roomBrain.glowSize = "120px";


    // --- Page state --- 
    // Track events for activity
    const pageState = {
        
        "scene": "room",
        "exhibitsComplete": false,
        "exhibits": [
            roomBrain,
            roomIris,
            roomLens,
            roomRetina
        ]
    }


    // pageState.exhibitsComplete = true;


    // ----- MAIN SCRIPT -----
    eyeRoomPage.addEventListener("pointermove", updateTorchLight);

    eyeRoomPage.addEventListener("pointerdown", updateTorchLight);

    lightSwitch.addEventListener("click", updateLightSwitch);

    lightSwitch.addEventListener("click", removeDarkOverlay);

    // Add all click handlers to exhibits
    pageState.exhibits.forEach(function(i) {
        i.addEventListener("click", function () {
            exhibitHandler(this);
        })
    })

    





    // ------ FUNCTIONS -------
    function exhibitHandler (exhibit) {
        console.log("*** exhibitHandler running ***");
        console.log(exhibit);

        const hasRead = exhibit.plaque.classList.contains("show");

        if(hasRead === false) {
            activatePlaque(exhibit);
        }

        // run showDialogue
        console.log("placeholder: runShowDialogue")

        function activatePlaque (exhibit) {
            console.log("*** activatePlaque running ***");
    
            exhibit.plaque.classList.add("show");
            setTimeout(()=> {
                darkOverlay.style.setProperty(`--${exhibit.glowName}-size`, exhibit.glowSize);
            }, 1000);
        }
    }


    function checkExhibitsComplete (value) {
        pageState.exhibitsComplete = value;

        console.log(`exhibitsComplete : ${pageState.exhibitsComplete}`);
    }
 

    // --- Dark Overlay and torch effect ---
    
    function updateTorchLight (event) {
        // console.log("updateTorchLight running")

        // xPos = clientX when clientWidth=1024px
        // clientWidth - 1024 = 0

        // Get pointer position
        let xPos = event.clientX;
        let yPos = event.clientY;

        if (document.documentElement.clientWidth > 1024) {
            xPos = event.clientX - ((document.documentElement.clientWidth - 1024) / 2);
        }

        console.log(`xPos: ${xPos}`);
        console.log(document.documentElement.clientWidth);

        // console.log(`yPos: ${yPos}`);

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
            lightSwitch.classList.replace("off", "on");
        } else if (lightSwitch.classList.contains("on") == true) {
            lightSwitch.classList.replace("on", "off");
        }
    }

}

export {eyeRoomScript};