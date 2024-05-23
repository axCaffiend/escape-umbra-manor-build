
function titleAnimation() {
    console.log("title-screen.js running");
    let finished = false;

    const startButton = document.querySelector(".start-button");
    const car = document.querySelector(".car");
    const road = document.querySelector(".road");
    const treesFg = document.querySelector(".trees-fg");
    const treesBg = document.querySelector(".trees-bg");
    const cloudContainer = document.querySelector(".cloud-container")
    const moon = document.querySelector(".moon");
    const logo = document.querySelector(".logo-container");




    // Start button flash and fade out
    startButton.classList.add("start-button-clicked");

    // After car moves off, hide car and stop trees-scroll/zoom out.
    car.classList.add("car-move-off");
    car.addEventListener("animationend", () => {
        car.style.display = "none";
        treesBg.classList.add("trees-bg-zoom-out");
        treesFg.classList.add("trees-fg-zoom-out");
        road.classList.add("road-zoom-out");
        moon.classList.add("moon-up");
        
        logo.classList.add("logo-reveal");
        }
    )


    // return finished;

    // function startGame() {

    //     // Start button flash and fade out
    //     startButton.classList.add("start-button-clicked");

    //     // After car moves off, hide car and stop trees-scroll/zoom out.
    //     car.classList.add("car-move-off");
    //     car.addEventListener("animationend", () => {car.style.display = "none";
    //     treesBg.classList.add("trees-bg-zoom-out");
    //     treesFg.classList.add("trees-fg-zoom-out");
    //     road.classList.add("road-zoom-out");
    //     moon.classList.add("moon-up");
    //     logo.classList.add("logo-reveal");
    //     })
    // }
}

export {titleAnimation};