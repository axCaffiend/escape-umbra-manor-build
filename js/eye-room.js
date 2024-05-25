function eyeRoomScript() {
    console.log("eyeRoomScript running");

    const eyeRoomPage = document.querySelector(".page-eye-room");
    const darkOverlay = document.querySelector(".eye-room-main .darkness-overlay");

    const lightSwitch = document.querySelector(".light-switch");
    



    // --- Dark Overlay and torch effect ---
    eyeRoomPage.addEventListener("pointermove", setTorchLight);

    eyeRoomPage.addEventListener("pointerdown", setTorchLight);

    
    function setTorchLight (event) {
        console.log("setTorchLight running")

        // Get pointer position
        let xPos = event.clientX;
        console.log(`xPos: ${xPos}`);

        let yPos = event.clientY;
        console.log(`yPos: ${yPos}`);

        // Set radial gradient position via custom properties
        darkOverlay.style.setProperty("--XPos", xPos + "px");
        darkOverlay.style.setProperty("--YPos", yPos + "px");

    }    


    // Light switch on/off animation
    lightSwitch.addEventListener("click", function (e) {
        if (lightSwitch.classList.contains("off") == true) {
            lightSwitch.classList.replace("off", "on");
        } else if (lightSwitch.classList.contains("on") == true) {
            lightSwitch.classList.replace("on", "off");
        }
    })







    //All exhibits checked? Enable light switch.
}

export {eyeRoomScript};