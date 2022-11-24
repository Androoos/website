document.addEventListener("DOMContentLoaded", () => {
    let menuBtn = document.querySelector(".menu-burger");
    let menuOverlay = document.querySelector("header");

    menuBtn.addEventListener("click", function() {
        let icon = menuBtn.querySelector(".bi")
        menuOverlay.classList.toggle("nav-open");
        if (menuOverlay.classList.contains("nav-open")) {
            icon.classList.remove("bi-list");
            icon.classList.add("bi-x");
        }else {
            icon.classList.add("bi-list");
            icon.classList.remove("bi-x");
        }
    })
})