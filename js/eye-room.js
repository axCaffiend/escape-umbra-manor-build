import * as dialogue from "./eye-room-dialogue.js";
import { showDialogue } from "./dialogue-box.js";


function eyeRoomScript() {
    console.log("eye-room.js running");

    const eyeRoomPage = document.querySelector(".page-eye-room");
    const darkOverlay = document.querySelector(".eye-room-main .darkness-overlay");

    const lightSwitch = document.querySelector(".light-switch");
    const roomLightOn = document.querySelector(".room-light__on");
    const roomLightBeam = document.querySelector(".room-light__beam");


    // Page state - major events for activity
    const pageState = {
        
        "scene": "room", 
        "lightOn": false ,
        "exhibitsComplete": false
    }

    // Event listeners

    eyeRoomPage.addEventListener("pointermove", updateTorchLight);

    eyeRoomPage.addEventListener("pointerdown", updateTorchLight);

    lightSwitch.addEventListener("click", updateLightSwitch);

    lightSwitch.addEventListener("click", updateDarkOverlay);


    // Main script
    showDialogue(dialogue.keyStatue);

    pageState.exhibitsComplete = true;

    







    
    function checkExhibitsComplete (value) {
        pageState.exhibitsComplete = value;

        console.log(`exhibitsComplete : ${pageState.exhibitsComplete}`);
    }
 

    // --- Dark Overlay and torch effect ---
    
    function updateTorchLight (event) {
        // console.log("updateTorchLight running")

        // Get pointer position
        let xPos = event.clientX;
        // console.log(`xPos: ${xPos}`);

        let yPos = event.clientY;
        // console.log(`yPos: ${yPos}`);

        // Set radial gradient position via custom properties
        darkOverlay.style.setProperty("--XPos", xPos + "px");
        darkOverlay.style.setProperty("--YPos", yPos + "px");

    }

    function updateDarkOverlay() {
        if (pageState.exhibitsComplete === true) {
            darkOverlay.classList.add("hide");
            roomLightOn.classList.add("show");
            roomLightBeam.classList.add("show");

            eyeRoomPage.removeEventListener("pointermove", updateTorchLight);
            eyeRoomPage.removeEventListener("pointerdown", updateTorchLight);
            pageState.lightOn = true;

        } else if (pageState.exhibitsComplete === false) {
            console.log("Exhibits not complete");
        }
    }



    // Light switch on/off animation

    function updateLightSwitch (e) {

        if (lightSwitch.classList.contains("off") == true) {
            lightSwitch.classList.replace("off", "on");
        } else if (lightSwitch.classList.contains("on") == true) {
            lightSwitch.classList.replace("on", "off");
        }
    }



  







    //All exhibits checked? Enable light switch.
}

export {eyeRoomScript};