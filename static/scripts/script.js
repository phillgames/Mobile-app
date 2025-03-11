let menuOpen = false;

function extendableMenu() {

    if (menuOpen === false) {
        let menudown = document.querySelector(".test")
        menudown.classList.remove("testMoveBack")
        menudown.classList.add("testMove")
        menuOpen = true
    }

    else {
        let menudown = document.querySelector(".test")
        menudown.classList.remove("testMove")
        menudown.classList.add("testMoveBack")
        menuOpen 
    }
}